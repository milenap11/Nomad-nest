/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/pets`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all destinations
router.get('/', function (req, res) {
    db.Destination.find({})
        .then(destinations => {
            res.render('destination-index', {
            destinations: destinations
        })
    })
})


// Create Route (POST/Create): This route receives the POST request sent from the new route,
// creates a new destination document using the form data, 
// and redirects the user to the new destination's show page
router.post('/', (req, res) => {
    db.Destination.create(req.body)
        .then(destination => res.redirect('/destinations/' + destination._id))
})


// New Route (GET/Read): This route renders a form 
// which the user will fill out to POST (create) a new location
router.get('/new', (req, res) => {
    res.render('new-form')
})


// Show Route (GET/Read): Will display an individual destination document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.Destination.findById(req.params.id)
        .then(destination => {
            res.render('destination-details', {
                destination: destination
            })
        })
        .catch(() => res.send('404 Error: Page Not Found'))
})


// Update Route (PUT/Update): This route receives the PUT request sent from the edit route, 
// edits the specified destination document using the form data,
// and redirects the user back to the show page for the updated location.
router.put('/:id', (req, res) => {
    db.Destination.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(destination => res.redirect('/destinations/' + destination._id))
})


// Destroy Route (DELETE/Delete): This route deletes a destination document 
// using the URL parameter (which will always be the destination document's ID)
router.delete('/:id', (req, res) => {
    db.Destination.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/'))
})


// Edit Route (GET/Read): This route renders a form
// the user will use to PUT (edit) properties of an existing destination
router.get('/:id/edit', (req, res) => {
    db.Destination.findById(req.params.id)
    .then(destination => res.render('edit-form', {destination: destination}))
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
