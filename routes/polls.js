var express = require('express');
var router = express.Router();
var db = require('../config/database');


const expressJwt = require('express-jwt');
const appSecret = require('../config/config').secret;
const authenticate = expressJwt({ secret: appSecret });

/**
 * @api {get} /polls/ Get all polls
 * @apiName GetAllPolls
 * @apiGroup Poll
 *
 * @apiSuccess (Success 200) {Integer} id Poll id.
 * @apiSuccess (Success 200) {String} question Poll question.
 * @apiSuccess (Success 200) {Boolean} free_text Free text poll status.
 * @apiSuccess (Success 200) {String} options Poll possible answers.
 * @apiSuccess (Success 200) {Integer} id_creator Id of poll creator.
 *
 * @apiError (Error 500) InternalServerError Couldn't get polls.
 */
router.get('/', function(req, res) {
    let query =
        `SELECT id, question, free_text, options, id_creator, creator_name
        FROM polls`;

    db.manyOrNone(query).then(data => {
        res.status(200).json(data);
    }).catch(error => {
        res.status(500).json({error: 'Couldn\'t get polls.'});
    });
});

/**
 * @api {post} /polls/ Create poll
 * @apiName CreatePoll
 * @apiGroup Poll
 * @apiPermission authenticated user
 *
 * @apiParam (RequestBody) {String} question Poll question.
 * @apiParam (RequestBody) {Boolean} free_text Poll answers are free text.
 *
 * @apiSuccess (Success 201) {Integer} id Newly created poll id.
 *
 * @apiError (Error 500) InternalServerError Couldn't create a poll.
 */
router.post('/', authenticate, function(req, res) {
    
    var answers = req.body.options.join('|||');

    let query =
        `INSERT INTO polls(id_creator, question, free_text, options, creator_name)
        VALUES ($(id_creator), $(question), $(free_text), $(options),$(creator_name))
        RETURNING id;`;

    db.one(query, {
        id_creator: req.user.id,
        question: req.body.question,
        free_text: req.body.free_text,
        options: answers,
        creator_name: req.body.creator_name
    }).then(data => {
        let poll_id = data.id;
        res.status(201).send({id: poll_id});
    }).catch(error => {
            res.status(500).json('Error creating poll.');
    });
});

/**
 * @api {get} /polls/:poll_id Get poll
 * @apiName GetPoll
 * @apiGroup Poll
 *
 * @apiParam (RequestParam) {Integer} poll_id Poll id.
 *
 * @apiSuccess (Success 200) {String} question Poll question.
 * @apiSuccess (Success 200) {Boolean} free_text Free text poll status.
 * @apiSuccess (Success 200) {String} options Poll possible answers.
 *
 * @apiError (Error 500) InternalServerError Could't get the poll.
 */
router.get('/:poll_id', function(req, res) {
    let id = req.params.poll_id;
    let query =
        `SELECT question, free_text, options
        FROM polls
        WHERE polls.id = $(id);`;

    db.oneOrNone(query, {
        id: id
    }).then(data => {
        res.status(200).json(data);
    }).catch(error => {
        res.status(500).json({error: 'Couldn\'t get the poll.'});
    });
});

/**
 * @api {get} /polls/:poll_id Get poll answers
 * @apiName GetPollAnswers
 * @apiGroup Poll
 *
 * @apiParam (RequestParam) {Integer} poll_id Poll id.
 *
 * @apiSuccess (Success 200) {Integer} id_user Id of user that answered.
 * @apiSuccess (Success 200) {String} answer Answer of the user.
 *
 * @apiError (Error 500) InternalServerError Could't get the poll.
 */
router.get('/:poll_id/answers', function(req, res) {
    let id = req.params.poll_id;
    let query =
        `SELECT id_user, answer
        FROM polls_answers
        WHERE id_poll = $(id);`;

    db.manyOrNone(query, {
        id: id
    }).then(data => {
        res.status(200).json(data);
    }).catch(error => {
        res.status(500).json('Coudln\'t get poll answers');
    });
});

/**
 * @api {post} /polls/:poll_id/answers Create poll asnwer
 * @apiName CreatePollAnswer
 * @apiGroup Poll
 * @apiPermission authenticated user
 * 
 * @apiParam (RequestParam) {Integer} poll_id Poll id.
 * 
 * @apiParam (RequestUser) {Integer} user_id Id of user that answered.
 *
 * @apiParam (RequestBody) {String} answer Poll answer.
 *
 * @apiSuccess (Success 201) {String} message Sucessfully added poll answer.
 *
 * @apiError (Error 500) InternalServerError Error adding answer.
 */
router.post('/:poll_id/answers', authenticate, function(req, res) {
    
    let queryUserHasVoted =
        `SELECT answer
        FROM public.polls_answers
        WHERE id_poll = $(id_poll)
        AND id_user = $(id_user);`;
    
    db.none(queryUserHasVoted, {
        id_poll: req.params.poll_id,
        id_user: req.user.id
    }).then(() => {
        let queryAnswerExists =         
        `SELECT options
        FROM public.polls
        WHERE id = $(id_poll);`

        db.one(queryAnswerExists, {
            id_poll: req.params.poll_id,
        }).then((data) => {
            var options = data['options'].split('|||');

            if (options.includes(req.body.answer)){
                let query =
                `INSERT INTO polls_answers(id_poll, id_user, answer)
                VALUES ($(id_poll), $(id_user), $(answer));`;
        
                db.none(query, {
                    id_poll: req.params.poll_id,
                    id_user: req.user.id,
                    answer: req.body.answer
                }).then(() => {
                    res.status(201).send('Sucessfully added poll answer.');
                }).catch(error => {
                    res.status(500).json('Error adding asnwer.');
                });
            }

        }).catch(error => {
            res.status(500).json('Answer does not exist in this poll.');
        });

    }).catch(error => {
        res.status(403).json('User has Voted');
    });

});


module.exports = router;
