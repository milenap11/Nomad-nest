/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/reviews`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Routes
--------------------------------------------------------------- */
// Index Route (All Reviews): 
// GET localhost:3000/reviews/
router.get('/', (req, res) => {
	db.Destination.find({}, { reviews: true, _id: false })
        .then(destinations => {
		    // format query results to appear in one array, 
		    // rather than an array of objects containing arrays 
	    	const flatList = []
	    	for (let destination of destinations) {
	        	flatList.push(...destination.reviews)
	    	}
	    	res.render('reviews/review-index', { reviews: flatList })
		}
	)
});

// New Route: GET localhost:3000/reviews/new
router.get('/new/:destinationId', async (req, res) => {
    const destination = await db.Destination.findById(req.params.destinationId)
    res.render('reviews/new-form', { destination: destination })
})

// Create Route: POST localhost:3000/reviews/
router.post('/create/:destinationId', (req, res) => {
    db.Destination.findByIdAndUpdate(
        req.params.destinationId,
        { $push: { reviews: req.body } },
        { new: true }
    )
    .then(() => res.redirect('/destinations/' + req.params.destinationId))
});

// Show Route: GET localhost:3000/reviews/:id
router.get('/:id', (req, res) => {
    db.Destination.findOne(
        { 'reviews._id': req.params.id },
        { 'reviews.$': true, _id: false }
    )
    .then(destination => {
        // format query results to appear in one object, 
        // rather than an object containing an array of one object
        res.render('reviews/review-details', { review: destination.reviews[0] })
        })
});

// Destroy Route: DELETE localhost:3000/reviews/:id
router.delete('/:id', (req, res) => {
    db.Destination.findOneAndUpdate(
        { 'reviews._id': req.params.id },
        { $pull: { reviews: { _id: req.params.id } } },
        { new: true }
    )
    .then(() => res.redirect('/reviews'))
});


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router