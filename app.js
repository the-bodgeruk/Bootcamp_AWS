const express = require('express');
const app = express();

// *** new path to the results file just to tidy a bit. Add path module to help create path to static
const results = require('./data/results.json'); // Include some data to emulate a database
const path = require('path'); // Used for concatenation to create a path
// Point to static pages
app.use(express.static(path.join(__dirname, '/public/html')));  // Client requests files relative to here - i.e. no path needed
app.use(express.static(path.join(__dirname, '/public/img')));   // e.g. in index.html, <img src="http://localhost:3000/xx.jpg"> 
app.use(express.static(path.join(__dirname, '/public/css')));  
app.use(express.static(path.join(__dirname, '/public/js')));   

// Home GET now returns the index.html instead of just a message. Note array for multiple paths
app.get(['/','/index.html'], (req, res) => {
  res.sendFile('./public/html/index.html', { root: __dirname }); // path is relative to the execution path __dirname
});

// *** 

app.get(`/`, (req, res) => res.send(`We have an API!`));

app.get(`/time`, (req, res) => {
    let today = new Date();
    let time = today.getHours() + `:` + today.getMinutes() + `:` + today.getSeconds();
    res.send(time);
})

app.get(`/date`, (req, res) => {
    let today = new Date();
    let date = today.getDay() + `/` + today.getMonth() + `/` + today.getFullYear();
    res.send(date);
})

app.get(`/dateTime`, (req, res) => {
    let today = new Date();
    let time = today.getHours() + `:` + today.getMinutes() + `:` + today.getSeconds() + `  ` + today.getDay() + `/` + today.getMonth() + `/` + today.getFullYear();
    res.send(time);
})

app.listen(3000, () => console.log(`Listening on port 3000`));

