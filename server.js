/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const methodOverride = require('method-override');



/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const destinationsCtrl = require('./controllers/destinations')
const reviewsCtrl = require('./controllers/reviews')

/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
// const liveReloadServer = livereload.createServer();
// liveReloadServer.server.once("connection", () => {
//     // wait for nodemon to fully restart before refreshing the page
//     setTimeout(() => {
//         liveReloadServer.refresh("/");
//     }, 100);
// });


/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middleware (app.use)
--------------------------------------------------------------- */
// Detect if running in a dev environment
if (process.env.ON_HEROKU === 'false') {
    // Configure the app to refresh the browser when nodemon restarts
    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once("connection", () => {
        // wait for nodemon to fully restart before refreshing the page
        setTimeout(() => {
        liveReloadServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload());
}

// Body parser: used for POST/PUT/PATCH routes: 
// this will take incoming strings from the body that are URL encoded and parse them 
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
// Allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride('_method'));


app.use(express.static('public'))
// app.use(connectLiveReload());
// Body parser: used for POST/PUT/PATCH routes: 
// this will take incoming strings from the body that are URL encoded and parse them 
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
// Allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride('_method'));



/* Mount routes
--------------------------------------------------------------- */
// Home Page
app.get('/', function (req, res) {
    db.Destination.find({isFeatured: true })
        .then(destinations => {
            res.render('home', {
                destinations: destinations
            })
        })
});

// About Page
app.get('/about', function (req, res) {
    res.render('about')
});


// When a GET request is sent to `/seed`, the destinations collection is seeded
// app.get('/seed', function (req, res) {
//     // Remove any existing destinations
//     db.Destination.deleteMany({})
//         .then(removedDestinations => {
//             console.log(`Removed ${removedDestinations.deletedCount} destinations`)
//             // Seed the destinations collection with the seed data
//             db.Destination.insertMany(db.seedDestinations)
//                 .then(addedDestinations => {
//                     console.log(`Added ${addedDestinations.length} destinations`)
//                     res.json(addedDestinations)
//                 })
//         })
// });


// This tells our app to look at the `controllers/destinations.js` file 
// to handle all routes that begin with `localhost:3000/destinations`
app.use('/destinations', destinationsCtrl)
app.use('/reviews', reviewsCtrl)

// The "catch-all" route: Runs for any other URL that doesn't match the above routes
app.get('*', function (req, res) {
    res.render('404')
});


/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
