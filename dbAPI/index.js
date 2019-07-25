const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const troylocale = './troy.db'
const ashleylocale = './ashley.db'
const bodyParser = require('body-parser');
const fs = require('fs');
let exec = require('child_process').exec, child;



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

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
  let sql = req.params.sqlquery
  troydb.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(rows);
  });

});

app.get('/api/db/ashley/:sqlquery', (req, res) => {
  let sql = req.params.sqlquery
  ashleydb.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(rows);
  });


});

app.post('/api/latex/', (req, res) => {
  let tex = req.body
  console.log(tex)
  fs.writeFile('./latex/resume.tex',req.body.latex, ()=>{
  exec('cd ./latex; ls; pdflatex resume.tex; ls',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
        fs.readFile('./latex/resume.pdf', (err, data)=>{
          res.send(data)

        })
    });

  })
})

// PORT
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});