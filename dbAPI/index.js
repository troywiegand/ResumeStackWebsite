const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const troylocale = './troy.db'
const ashleylocale = './ashley.db'

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

let troydb = new sqlite3.Database(troylocale, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the resume database.');
  });

  let ashleydb = new sqlite3.Database(ashleylocale, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the resume database.');
  });

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/api/db/troy/:sqlquery', (req, res) => {
    let sql=req.params.sqlquery
    troydb.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.send(rows);
      });

});

app.get('/api/db/ashley/:sqlquery', (req, res) => {
  let sql=req.params.sqlquery
  ashleydb.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.send(rows);
    });

});



// PORT
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`);
});