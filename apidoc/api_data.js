define({ "api": [
  {
    "type": "post",
    "url": "/crowdfunding/",
    "title": "Creates a new crowdfunding project.",
    "name": "PostCrowdfunding",
    "group": "Crowdfunding",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "RequestBody": [
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": ""
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Sucessfully created a crowdfunding project.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/crowdfundings.js",
    "groupTitle": "Crowdfunding"
  },
  {
    "type": "get",
    "url": "/messages/",
    "title": "Get conversations.",
    "name": "GetConversations",
    "group": "Messages",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "other_user_id",
            "description": "<p>Other user unique id.</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "other_user_full_name",
            "description": "<p>Other user name.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/messages.js",
    "groupTitle": "Messages"
  },
  {
    "type": "get",
    "url": "/messages/:other_user",
    "title": "Get messages between users.",
    "name": "GetMessages",
    "group": "Messages",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "RequestParams": [
          {
            "group": "RequestParams",
            "type": "Integer",
            "optional": false,
            "field": "other_user",
            "description": "<p>Other user unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "sender_id",
            "description": "<p>User that sent a message.</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "content",
            "description": "<p>Message content.</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "date_sent",
            "description": "<p>Date the message was sent.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/messages.js",
    "groupTitle": "Messages"
  },
  {
    "type": "post",
    "url": "/messages/",
    "title": "Send a new message.",
    "name": "SendMessage",
    "group": "Messages",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "RequestBody": [
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "sender_id",
            "description": "<p>Sender's unique id.</p>"
          },
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "receiver_id",
            "description": "<p>Receiver's unique id.</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Message to send.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "message",
            "description": "<p>Successfully sent a message.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal Server Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/messages.js",
    "groupTitle": "Messages"
  },
  {
    "type": "post",
    "url": "/services/:id/offers/accept",
    "title": "14 - Accept service offer",
    "name": "AcceptServiceOffer",
    "group": "Service",
    "permission": [
      {
        "name": "service creator"
      }
    ],
    "description": "<p>Accept service offer</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service to offer to accept (service can't have deleted=true)</p>"
          }
        ],
        "RequestBody": [
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "partner_id",
            "description": "<p>ID of the user that made the offer (XOR crowdfunding_id)</p>"
          },
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "crowdfunding_id",
            "description": "<p>ID of the crowdfunding that made the offer (XOR partner_id)</p>"
          },
          {
            "group": "RequestBody",
            "type": "Date",
            "optional": false,
            "field": "date_scheduled",
            "description": "<p>Date the service is goind to be provided</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "POST: /api/services/<ID>/offers/accept",
        "type": "json"
      },
      {
        "title": "Example 1",
        "content": "[When the offer was made by a user]\nPOST: /api/services/5/offers/accept\nbody: {\n     partner_id: 10,\n}",
        "type": "json"
      },
      {
        "title": "Example 2",
        "content": "[When the offer was made by a crowdfunding]\nPOST: /api/services/5/offers/accept\nbody: {\n     crowdfunding_id: 10,\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "post",
    "url": "/services/:id/comments",
    "title": "18 - Comment on a service",
    "name": "CommentService",
    "group": "Service",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>Create a new comment on a service. in_reply_to overrides :id in order make sure both reply and replied have the same service</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service to comment on</p>"
          }
        ],
        "RequestBody": [
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Content of the comment</p>"
          },
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "in_reply_to",
            "description": "<p>ID of the message this one is replying to (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "POST: /api/services/<ID>/comments",
        "type": "json"
      },
      {
        "title": "Example",
        "content": "POST: /api/services/5/comments\nbody: {\n     message: 'This is a comment',\n     in_reply_to: 10\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "put",
    "url": "/services/",
    "title": "05 - Create service",
    "name": "CreateService",
    "group": "Service",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>Create a new service</p>",
    "parameter": {
      "fields": {
        "RequestBody": [
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the service</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the service (Optional)</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of the service [BUSINESS, ARTS, ...]</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Geographic coordinated of the service (Optional)</p>"
          },
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "acceptable_radius",
            "description": "<p>Maximum distance from location where the service can be done (Optional)</p>"
          },
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "mygrant_value",
            "description": "<p>Number of hours the service will take</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "service_type",
            "description": "<p>Type of the service [PROVIDE, REQUEST]</p>"
          },
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "creator_id",
            "description": "<p>ID of the creator if created by a user (XOR crowdfunding_id)</p>"
          },
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "crowdfunding_id",
            "description": "<p>ID of the crowdfunding if created by a crowdfunding (XOR creator_id)</p>"
          },
          {
            "group": "RequestBody",
            "type": "Boolean",
            "optional": false,
            "field": "repeatable",
            "description": "<p>If the service can be done more than one time</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "PUT: /api/services",
        "type": "json"
      },
      {
        "title": "Example",
        "content": "PUT: /api/services\nbody: {\n     title: 'A new title',\n     description: 'A new description',\n     category: 'FUN',\n     location: '353 st',\n     acceptable_radius: '2540',\n     mygrant_value: '50',\n     service_type: 'REQUEST',\n     creator_id: '4'\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "put",
    "url": "/services/:id/images",
    "title": "09 - Create service image",
    "name": "CreateServiceImage",
    "group": "Service",
    "permission": [
      {
        "name": "service creator"
      }
    ],
    "description": "<p>Upload image and add it to the service's images</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service to get images of</p>"
          }
        ],
        "RequestFiles": [
          {
            "group": "RequestFiles",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Image file of the image</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "PUT: /api/services/<ID>/images",
        "type": "json"
      },
      {
        "title": "Example",
        "content": "PUT: /api/services/5/images\nfiles.image?",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "post",
    "url": "/services/:id/offers/decline",
    "title": "15 - Decline service offer",
    "name": "DeclineServiceOffer",
    "group": "Service",
    "permission": [
      {
        "name": "service creator"
      }
    ],
    "description": "<p>Removes service offer</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service to offer to accept</p>"
          }
        ],
        "RequestBody": [
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "partner_id",
            "description": "<p>ID of the user that made the offer (XOR crowdfunding_id)</p>"
          },
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "crowdfunding_id",
            "description": "<p>ID of the crowdfunding that made the offer (XOR partner_id)</p>"
          },
          {
            "group": "RequestBody",
            "type": "Date",
            "optional": false,
            "field": "date_scheduled",
            "description": "<p>Date the service is goind to be provided</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "POST: /api/services/<ID>/offers/decline",
        "type": "json"
      },
      {
        "title": "Example 1",
        "content": "[When the offer was made by a user]\nPOST: /api/services/5/offers/decline\nbody: {\n     partner_id: 10,\n}",
        "type": "json"
      },
      {
        "title": "Example 2",
        "content": "[When the offer was made by a crowdfunding]\nPOST: /api/services/5/offers/decline\nbody: {\n     crowdfunding_id: 10,\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "delete",
    "url": "/services/comments/:id",
    "title": "20 - Delete a comment",
    "name": "DeleteComment",
    "group": "Service",
    "permission": [
      {
        "name": "comment sender"
      }
    ],
    "description": "<p>Deletes the comment with the given id</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the comment to delete</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "DELETE: /api/services/comments/<ID>",
        "type": "json"
      },
      {
        "title": "Example",
        "content": "DELETE: /api/services/comments/5",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "delete",
    "url": "/services/:id",
    "title": "07 - Delete service",
    "name": "DeleteService",
    "group": "Service",
    "permission": [
      {
        "name": "service creator"
      }
    ],
    "description": "<p>Delete a service by its ID</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service to delete</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "DELETE: /api/services/<ID>",
        "type": "json"
      },
      {
        "title": "Example",
        "content": "DELETE: /api/services/5",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "delete",
    "url": "/services/:id/images/:image",
    "title": "10 - Delete service image",
    "name": "DeleteServiceImage",
    "group": "Service",
    "permission": [
      {
        "name": "service creator"
      }
    ],
    "description": "<p>Delete image of a service by its URL</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service to get images of</p>"
          },
          {
            "group": "RequestParam",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>URL of the image to delete</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "DELETE: /api/services/<ID>/images/<IMAGE_URL>",
        "type": "json"
      },
      {
        "title": "Example",
        "content": "DELETE: /api/services/5/images/http://dummyimage.com/965x531.png/dddddd/000000",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "put",
    "url": "/services/comments/:id",
    "title": "19 - Edit a comment",
    "name": "EditComment",
    "group": "Service",
    "permission": [
      {
        "name": "comment sender"
      }
    ],
    "description": "<p>Edits the content of a comment</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the comment to edit</p>"
          }
        ],
        "RequestBody": [
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>New content of the comment</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "PUT: /api/services/comments/<ID>",
        "type": "json"
      },
      {
        "title": "Example",
        "content": "PUT: /api/services/comments/5\nbody: {\n     message: 'This is an edited comment'\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "put",
    "url": "/services/:id",
    "title": "06 - Edit service",
    "name": "EditService",
    "group": "Service",
    "permission": [
      {
        "name": "service creator"
      }
    ],
    "description": "<p>Edit a service by its ID</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service to update</p>"
          }
        ],
        "RequestBody": [
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the service (Optional)</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the service (Optional)</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of the service [BUSINESS, ARTS, ...] (Optional)</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Geographic coordinated of the service (Optional)</p>"
          },
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "acceptable_radius",
            "description": "<p>Maximum distance from location where the service can be done (Optional)</p>"
          },
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "mygrant_value",
            "description": "<p>Number of hours the service will take (Optional)</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "service_type",
            "description": "<p>Type of the service [PROVIDE, REQUEST] (Optional)</p>"
          },
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "creator_id",
            "description": "<p>ID of the creator if created by a user (XOR crowdfunding_id)</p>"
          },
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "crowdfunding_id",
            "description": "<p>ID of the crowdfunding if created by a crowdfunding (XOR creator_id)</p>"
          },
          {
            "group": "RequestBody",
            "type": "Boolean",
            "optional": false,
            "field": "repeatable",
            "description": "<p>If the service can be done more than one time (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "PUT: /api/services/<ID>",
        "type": "json"
      },
      {
        "title": "Example",
        "content": "PUT: /api/services/5\nbody: {\n     title: 'An edited title',\n     description: 'An edit description',\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "get",
    "url": "/services/:id",
    "title": "04 - Get service by ID",
    "name": "GetServiceByID",
    "group": "Service",
    "permission": [
      {
        "name": "visitor"
      }
    ],
    "description": "<p>Get service info by ID</p>",
    "parameter": {
      "fields": {
        "RequestParams": [
          {
            "group": "RequestParams",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "GET: /api/services/<ID>",
        "type": "json"
      },
      {
        "title": "Example",
        "content": "GET: /api/services/5",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "service_id",
            "description": "<p>ID of the service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of the service [BUSINESS, ARTS, ...]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Geographic coordinated of the service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "acceptable_radius",
            "description": "<p>Maximum distance from location where the service can be done</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "mygrant_value",
            "description": "<p>Number of hours the service will take</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date the service was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service_type",
            "description": "<p>Type of the service [PROVIDE, REQUEST]</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "creator_id",
            "description": "<p>ID of the creator if created by a user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "provider_name",
            "description": "<p>Name of the creator if created by a user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "crowdfunding_id",
            "description": "<p>ID of the crowdfunding if created by a crowdfunding</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "crowdfunding_title",
            "description": "<p>Title of the crowdfunding if created by a crowdfunding</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "get",
    "url": "/services/:id/comments",
    "title": "17 - Get service comments",
    "name": "GetServiceComments",
    "group": "Service",
    "permission": [
      {
        "name": "visitor"
      }
    ],
    "description": "<p>Gets comments made on service</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service the comments are about</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "GET: /api/services/<ID>/comments",
        "type": "json"
      },
      {
        "title": "Example",
        "content": "GET: /api/services/5/comments",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "comment_id",
            "description": "<p>ID of the comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sender_id",
            "description": "<p>ID of the user that made the comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sender_name",
            "description": "<p>Name of the user that made the comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Content of the comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_posted",
            "description": "<p>Date the comment was made</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "in_reply_to",
            "description": "<p>ID of the comment this is replying to</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "edited",
            "description": "<p>If the comment has been edited</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "get",
    "url": "/services/:id/images",
    "title": "08 - Get service images",
    "name": "GetServiceImages",
    "group": "Service",
    "permission": [
      {
        "name": "visitor"
      }
    ],
    "description": "<p>Get images of a service</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service to get images of</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "GET: /api/services/<ID>/images",
        "type": "json"
      },
      {
        "title": "Example",
        "content": "GET: /api/services/5/images",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "images",
            "description": "<p>List of images of the service {service_id, image_url}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "get",
    "url": "/services/:id/offers",
    "title": "11 - Get service offers",
    "name": "GetServiceOffers",
    "group": "Service",
    "permission": [
      {
        "name": "service creator"
      }
    ],
    "description": "<p>Get list of offers made to a service by a user or crowdfunding</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service to get offers of</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "GET: /api/services/<ID>/offers",
        "type": "json"
      },
      {
        "title": "Example",
        "content": "GET: /api/services/5/offers",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "requesters",
            "description": "<p>List of the users making the offers {type, requester_id, requester_name}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "get",
    "url": "/services/:id/offers/:type/:candidate",
    "title": "12 - Get specific offer",
    "name": "GetServiceSpecificOffer",
    "group": "Service",
    "permission": [
      {
        "name": "service creator"
      }
    ],
    "description": "<p>Get offer made to a service by a user or crowdfunding</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service of the offer</p>"
          },
          {
            "group": "RequestParam",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Depends if the offer was made by a crowdfunding or by a user ('crowdfunding, 'user')</p>"
          },
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "candidate",
            "description": "<p>ID of the candidate that made the offer</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "GET: /api/services/<ID>/offers/<TYPE>/<CANDIDATE>",
        "type": "json"
      },
      {
        "title": "Example 1",
        "content": "GET: /api/services/5/offers/user/10",
        "type": "json"
      },
      {
        "title": "Example 2",
        "content": "GET: /api/services/5/offers/crowdfunding/10",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "requester",
            "description": "<p>Users making the offers {requester_id, requester_name}</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "get",
    "url": "/services/",
    "title": "01 - Get service list",
    "name": "GetServices",
    "group": "Service",
    "permission": [
      {
        "name": "visitor"
      }
    ],
    "description": "<p>Get a list of active services, by page, containing up to N items. The maximum of items/page is 50.</p>",
    "parameter": {
      "fields": {
        "RequestQueryParams": [
          {
            "group": "RequestQueryParams",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>page number to return (Optional)</p>"
          },
          {
            "group": "RequestQueryParams",
            "type": "Integer",
            "optional": false,
            "field": "items",
            "description": "<p>number of items per page default/max: 50 (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "GET: /api/services?page=<PAGE>&items=<ITEMS>",
        "type": "json"
      },
      {
        "title": "Example 1",
        "content": "GET: /api/services?page=3",
        "type": "json"
      },
      {
        "title": "Example 2",
        "content": "GET: /api/services?page=1&items=25",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of the service [BUSINESS, ARTS, ...]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Geographic coordinated of the service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "acceptable_radius",
            "description": "<p>Maximum distance from location where the service can be done</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "mygrant_value",
            "description": "<p>Number of hours the service will take</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date the service was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service_type",
            "description": "<p>Type of the service [PROVIDE, REQUEST]</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "creator_id",
            "description": "<p>ID of the creator if created by a user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "provider_name",
            "description": "<p>Name of the creator if created by a user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "crowdfunding_id",
            "description": "<p>ID of the crowdfunding if created by a crowdfunding</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "crowdfunding_title",
            "description": "<p>Title of the crowdfunding if created by a crowdfunding</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "get",
    "url": "/services/num-pages",
    "title": "02 - Get number of pages of service list",
    "name": "GetServicesNumPages",
    "group": "Service",
    "permission": [
      {
        "name": "visitor"
      }
    ],
    "description": "<p>Returns the number of pages of active services (with each page having up to N items)</p>",
    "parameter": {
      "fields": {
        "RequestQueryParams": [
          {
            "group": "RequestQueryParams",
            "type": "Integer",
            "optional": false,
            "field": "Items",
            "description": "<p>number of items per page default/max: 50 (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "GET: /api/services/num-pages?items=<ITEMS>",
        "type": "json"
      },
      {
        "title": "Example",
        "content": "GET: /api/services/num-pages?items=30",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "n",
            "description": "<p>Returns only the integer of the number of pages (No JSON key: value)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "post",
    "url": "/services/:id/offers",
    "title": "13 - Make service offer",
    "name": "MakeServiceOffer",
    "group": "Service",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "description": "<p>Create offer to a service</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service to make offer to (service can't have deleted=true)</p>"
          }
        ],
        "RequestBody": [
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "crowdfunding_id",
            "description": "<p>ID of the crowdfunding making the offer (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "POST: /api/services/<ID>/offers",
        "type": "json"
      },
      {
        "title": "Example 1",
        "content": "[When the offer is being made in the name of a the logged in user]\nPOST: /api/services/5/offers",
        "type": "json"
      },
      {
        "title": "Example 2",
        "content": "[When the offer is being made in the name of a crowdfunding]\nPOST: /api/services/5/offers\nbody: {\n     crowdfunding_id: 10,\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "put",
    "url": "/services/instance/:id",
    "title": "16 - Rate a service",
    "name": "ReviewServiceInstance",
    "group": "Service",
    "permission": [
      {
        "name": "service creator/partner"
      }
    ],
    "description": "<p>Adds rating given by participant to a service instance</p>",
    "parameter": {
      "fields": {
        "RequestParam": [
          {
            "group": "RequestParam",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the service instance to review</p>"
          }
        ],
        "RequestBody": [
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "rating",
            "description": "<p>Rating to be given to the service instance</p>"
          },
          {
            "group": "RequestBody",
            "type": "Integer",
            "optional": false,
            "field": "crowdfunding_id",
            "description": "<p>ID of the crowdfunding reviewing a service (Only applicable to services provided to a crowdfunding)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "POST: /api/services/instance/<ID>",
        "type": "json"
      },
      {
        "title": "Example 1",
        "content": "[When the participant doing the rating is a user]\nPOST: /api/services/instance/<ID>\nbody: {\n     rating: 2\n}",
        "type": "json"
      },
      {
        "title": "Example 2",
        "content": "[When the participant doing the rating is a crowdfunding]\nPOST: /api/services/instance/<ID>\nbody: {\n     crowdfunding_id: 10,\n     rating: 2\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "OK",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  },
  {
    "type": "get",
    "url": "/services/search",
    "title": "03 - Search for services",
    "name": "SearchService",
    "group": "Service",
    "permission": [
      {
        "name": "visitor"
      }
    ],
    "description": "<p>Search among active services' titles and descriptions using the given query text</p>",
    "parameter": {
      "fields": {
        "RequestQueryParams": [
          {
            "group": "RequestQueryParams",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>Search query (Required)</p>"
          },
          {
            "group": "RequestQueryParams",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum number of results default: 50 (Optional)</p>"
          },
          {
            "group": "RequestQueryParams",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>Language of the query ['portuguese', 'english', ...] default: 'english' (Optional)</p>"
          },
          {
            "group": "RequestQueryParams",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>Searches in description ['yes', 'no'] default: 'yes' (Optional)</p>"
          },
          {
            "group": "RequestQueryParams",
            "type": "String",
            "optional": false,
            "field": "cat",
            "description": "<p>Category of the service [BUSINESS, ARTS, ...] (Optional)</p>"
          },
          {
            "group": "RequestQueryParams",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the service [PROVIDE, REQUEST] (Optional)</p>"
          },
          {
            "group": "RequestQueryParams",
            "type": "Integer",
            "optional": false,
            "field": "mygmax",
            "description": "<p>Max bound for mygrant_value (Optional)</p>"
          },
          {
            "group": "RequestQueryParams",
            "type": "Integer",
            "optional": false,
            "field": "mygmin",
            "description": "<p>Min bound for mygrant_value (Optional)</p>"
          },
          {
            "group": "RequestQueryParams",
            "type": "Date",
            "optional": false,
            "field": "datemax",
            "description": "<p>Max bound for created_date (Optional)</p>"
          },
          {
            "group": "RequestQueryParams",
            "type": "Date",
            "optional": false,
            "field": "datemin",
            "description": "<p>Min bound for created_date (Optional)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Syntax",
        "content": "GET: /api/services/search?q=<QUERY>",
        "type": "json"
      },
      {
        "title": "Example 1",
        "content": "GET: /api/services/search?q=support+tangible+extranet",
        "type": "json"
      },
      {
        "title": "Example 2",
        "content": "GET: /api/services/search?q=tangible services&desc=no",
        "type": "json"
      },
      {
        "title": "Example 3",
        "content": "GET: /api/services/search?q=support paradigms&lang=english&limit=10&cat=fun&type=request",
        "type": "json"
      },
      {
        "title": "Example 4",
        "content": "GET: /api/services/search?q=support paradigms&lang=english&limit=100&mygmax=50&mygmin=30&datemin=2018-01-01",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "service_id",
            "description": "<p>ID of the service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the service</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of the service [BUSINESS, ARTS, ...]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Geographic coordinated of the service</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "acceptable_radius",
            "description": "<p>Maximum distance from location where the service can be done</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "mygrant_value",
            "description": "<p>Number of hours the service will take</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date the service was created</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service_type",
            "description": "<p>Type of the service [PROVIDE, REQUEST]</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "creator_id",
            "description": "<p>ID of the creator if created by a user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "provider_name",
            "description": "<p>Name of the creator if created by a user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "crowdfunding_id",
            "description": "<p>ID of the crowdfunding if created by a crowdfunding</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "crowdfunding_title",
            "description": "<p>Title of the crowdfunding if created by a crowdfunding</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid URL Parameters</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Database Query Failed</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/services.js",
    "groupTitle": "Service"
  }
] });
