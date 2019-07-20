const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const dblocale = '/home/troy/Resume/resume.db'

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

let db = new sqlite3.Database(dblocale, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the resume database.');
  });

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/api/db/:sqlquery', (req, res) => {

    let sql=req.params.sqlquery.substring(1, req.params.sqlquery.length-1);
    db.all(sql, [], (err, rows) => {
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