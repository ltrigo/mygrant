var express = require('express');
var router = express.Router();
var db = require('../config/database');

// Creates a crowdfunding project.
router.post('/', function(req, res) {
    console.log(req);
    var title = req.body.title;
    var description = req.body.description;
    var category = req.body.category;
    var location = req.body.location;
    var mygrantTarget = req.body.mygrant_target;
    var timeInterval = req.body.time_interval;
    var creatorId = req.body.creator_id;
    var query = 
        `INSERT INTO crowdfunding (title, description, category, location, mygrant_target, date_created, date_finished, status, creator_id)
        VALUES ($(title), $(description), 'BUSINESS'::service_categories, $(location), $(mygrant_target), now(), now() + interval '1 week', 'COLLECTING'::crowdfunding_statuses, $(creator_id));`;
    
    db.none(query, {
        title: title,
        description: description,
        location: location,
        mygrant_target: mygrantTarget,
        creator_id: creatorId
    }).then(() => {
        res.status(201).send('Sucessfully created a crowdfunding project.');
    }).catch(error => {
        res.status(500).json({error});
    });
});

// Gets a crowdfunding project.
router.get('/:id', function(req, res) {
    var id = req.params.id;
    var query = 
        `SELECT title, description, category, location, mygrant_target, date_created, date_finished, status, creator_id, users.full_name as creator_name
        FROM crowdfunding
        INNER JOIN users ON users.id = crowdfunding.creator_id
        WHERE crowdfunding.id = $(id);`;

    db.one(query, {
        id: id
    }).then(data => {
        res.status(200).json(data);
    }).catch(error => {
        res.status(500).json({error});
    });
});

// Updates a crowdfunding project.
router.put('/:id', function(req, res) {
    var id = req.params.id;
    var title = req.body.title;
    var description = req.body.description;
    var location = req.body.location;
    var query = 
        `UPDATE crowdfunding
        SET title = $(title),
            description = $(description),
            category = 'ARTS'::service_categories,
            location = $(location)
        WHERE id = $(id);`;

    db.none(query, {
        title: title,
        description: description,
        location: location,
        id: id
    }).then(() => {
        res.status(200).send('Successfully updated crowdfunding project.');
    }).catch(error => {
        res.status(500).json(error);
    });
});

// Deletes a crowdfunding project.
router.delete('/:id', function(req, res) {
    var id = req.params.id;
    var query = 
        `Delete crowdfunding project:
        DELETE FROM crowdfunding
        WHERE id = $(id);`;

    db.none(query, {
        id: id
    }).then(() => {
        res.status(200).send('Sucessfully deleted crowdfunding project.');
    }).catch(error => {
        res.status(500).json(error);
    });
});

// Gets a crowdfunding project average rating.
router.get('/:id/rating', function(req, res) {
    var id = req.params.id;
    var query = 
        `SELECT avg(total_ratings.rating) as average_rating
        FROM (
            SELECT rating
            FROM crowdfunding_donation
            WHERE crowdfunding_id = $(id)
        ) as total_ratings;`;
    
    db.one(query, {
        id: id
    }).then(data => {
        res.status(200).json(data);
    }).catch(error => {
        res.status(500).json(error);
    })
});

// Get all the crowdfunding projects.
router.get('/', function(req, res) {
    
});

// User donates to crowdfunding project.
router.post('/:id/donate', function(req, res) {

});

// Gets all crowdfunding project's donations.
router.get('/:id/donations', function(req, res) {

});

// Rate a crowdfunding project.
router.get('/:id/rate', function(req, res) {

});

// Service creator offers a service to the crowdfunding creator.
router.post('/:id/service_offer', function(req, res) {

});

// Deletes a service offer from the available offers.
router.delete('/:id/service_offer', function(req, res) {

});

module.exports = router;