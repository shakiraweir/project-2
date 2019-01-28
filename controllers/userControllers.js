const mongoose = require('mongoose')

//Need to create DB dir before bring this online
// mongoose.connect('mongodb://localhost/review')

mongoose.Promise = Promise


const UserModel = mongoose.model('User', UserSchema)

module.exports = {
    index: () => {
        // (GET Request) List all items of Users
        (req, res) => {
            Bookmark.find({}).then(result => {
                res.json(result)
            })
        }
    },

    new: () => {
        //(GET Request) Render form to create a new instance of user
        (req, res) => {
            Bookmark.findOne({title: req.params.title})
                .then(result => {
                    res.json(result)
            })
        }
    },

    create: () => {
        //(POST Request) Create new user in the database
        (req, res) => {
            Bookmark.create(req.body).then(result => {
                res.json(result)
            })
        }
    },

    show: () => {
        //(GET Request) Show a single user
        (req, res) => {
            UserModel.findOne({name: req.params.name}).then((results) => {
                console.log(results)
                res.send(results)
            })
        }
    },

    edit: () => {
        // (GET Request) Render form to update a single user
        (req, res) => {
           
        }
    },

    update: () => {
        (req, res) => {
            // (PUT Request) Update resource in the database
            Bookmark.findOneAndUpdate({title: req.params.title}, req.body).then(result => {
                res.json(result)
            })
        }
    },

    destroy: () => {
        //(DELETE Request) Delete a resource
        (req, res) => {
            Bookmark.findOneAndRemove({title: req.params.title}).then(result => {
                releaseEvents.json(result)
            })
        }
    },
}