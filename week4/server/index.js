// the way you call data from our env file, you use a dotenv function
require('dotenv').config();
// we acces our env file by using .env and then call the port number with PORT
const port = process.env.PORT;
// you created a constant variable express, then you require to use express
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');


// declare our server
const app = express();
// Set middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
// Base URL
const baseUrl = process.env.BASE_URL;


// how to create an endpoint
app.get('/', (req, res) => {
    //status codes examples: 404, 500, 200
    // instead of a simple string you could also use objects instead
    res.status(200).send({
        status: 200,
        message: 'Express server is ok'
    });
});
// Endpoint for API movies
app.get('/get-movies', (req, res) => {
    const url = `${baseUrl}/films`;
    superagent.get(url).end((error, resp) =>{
        // Inside here we tell superagent what to do with the request
        if (error){
            res.status(400).send({
                status: 400,
                message: 'Unable to get movies.'
            });
        }
        res.status(200).send(resp.body);
    });
});

app.post('/get-one-movie', (req, res) => {
    const incomingData = req.body;
    const url = `${baseUrl}/films/${incomingData.id}`;
    superagent.get(url).end((error, resp) =>{
        // Inside here we tell superagent what to do with the request
        if (error){
            res.status(400).send({
                status: 400,
                message: 'Movie not found with that Id.'
            });
        }
        res.status(200).send(resp.body);
    });
});

app.post('/get-one-movie-title', (req, res) => {
    const incomingData = req.body;
    const url = `${baseUrl}/films/${incomingData.id}`;
    superagent.get(url).end((error, resp) =>{
        // Inside here we tell superagent what to do with the request
        if (error){
            res.status(400).send({
                status: 400,
                message: 'Movie not found with that Title.'
            });
        }
        res.status(200).send(resp.body);
    });
});

// get all movies
// llop thru movielist till we find an object(movie)
// make it loop till we have the same title
// if same title, get the id of the one that matches
// then use into






//after declared it, start using it
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})