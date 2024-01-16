/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");


/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const destinationsCtrl = require('./controllers/destinations')


/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    // wait for nodemon to fully restart before refreshing the page
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middleware (app.use)
--------------------------------------------------------------- */
app.use(express.static('public'))
app.use(connectLiveReload());


/* Mount routes
--------------------------------------------------------------- */
app.get('/', function (req, res) {
    res.send('Nomad Nest')
});

// When a GET request is sent to `/seed`, the destinations collection is seeded
app.get('/seed', function (req, res) {
    // Remove any existing destinations
    db.Destination.deleteMany({})
        .then(removedDestinations => {
            console.log(`Removed ${removedDestinations.deletedCount} destinations`)
            // Seed the destinations collection with the seed data
            db.Destination.insertMany(db.seedDestinations)
                .then(addedDestinations => {
                    console.log(`Added ${addedDestinations.length} destinations`)
                    res.json(addedDestinations)
                })
        })
});


// This tells our app to look at the `controllers/destinations.js` file 
// to handle all routes that begin with `localhost:3000/destinations`
app.use('/destinations', destinationsCtrl)


/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
