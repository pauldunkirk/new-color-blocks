var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
var pg = require('pg');

var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

// get all tasks
app.get('/colors', function(req, res) {
  console.log('hit my get all colors route');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('SELECT * FROM colors ORDER BY random();', function(err, result) {
        done();
        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

// // create a new task in the db
// app.post('/', function(req, res) {
//   console.log('hit post route');
//   console.log('here is the body ->', req.body);
//
//   var taskObject = req.body;
//
//   // db query
//   // INSERT INTO task (name) VALUES ('test');
//   pool.connect(function(err, client, done) {
//     if(err){
//       console.log(err);
//       res.sendStatus(500);
//     }else{
//       client.query('INSERT INTO task (name) VALUES ($1);',
//         [taskObject.taskName], function(err, result) {
//           done();
//           if(err){
//             console.log(err);
//             res.sendStatus(500); // the world exploded
//           }else{
//             res.sendStatus(201);
//           }
//       });
//     }
//   });
// });
//
// // create a new task in the db
// app.delete('/:id', function(req, res) {
//   var taskToDeleteId = req.params.id;
//   console.log('hit delete route');
//   console.log('here is the id to delete ->', taskToDeleteId);
//
//   // db query
//   // DELETE FROM task WHERE id=7
//   pool.connect(function(err, client, done) {
//     if(err){
//       console.log(err);
//       res.sendStatus(500);
//     }else{
//       client.query('DELETE FROM task WHERE id=$1;',
//         [taskToDeleteId], function(err, result) {
//           done();
//           if(err){
//             console.log(err);
//             res.sendStatus(500); // the world exploded
//           }else{
//             res.sendStatus(200);
//           }
//       });
//     }
//   });
// });
//
//
//
// // create a new task in the db
// app.put('/complete/:id', function(req, res) {
//   var taskToCompleteId = req.params.id;
//   console.log('hit complete route');
//   console.log('here is the id to complete ->', taskToCompleteId);
//
//   // db query
//   // UPDATE task SET status = TRUE WHERE ID = 4;
//   pool.connect(function(err, client, done) {
//     if(err){
//       console.log(err);
//       res.sendStatus(500);
//     }else{
//       client.query('UPDATE task SET status=TRUE WHERE ID=$1;',
//         [taskToCompleteId], function(err, result) {
//           done();
//           if(err){
//             console.log(err);
//             res.sendStatus(500); // the world exploded
//           }else{
//             res.sendStatus(200);
//           }
//       });
//     }
//   });
// });
