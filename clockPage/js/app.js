const express = require('express');
const app = express(); 
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Empty path detected');
})

app.get('/time', (req, res) => {
  let today = new Date();
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  res.send(time);
})

app.listen(3000, console.log(`Node web server listening on port 3000`));


