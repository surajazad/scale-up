const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const emailer = require('./services/emailer');
const cors = require('cors');
// parse application/json
app.use(bodyParser.json());
app.use(cors());
 
//create database connection
// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'dharm715',
//   database: 'scaleup'
// });
 
//connect to database
// conn.connect((err) =>{
//   if(err) throw err;
//   console.log('Mysql Connected...');
// });
 
//add new query
app.post('/api/query',(req, res) => {
  // let data = {name: req.body.name, email: req.body.email, phone: req.body.phone, company: req.body.company, message: req.body.message};
  // let sql = "INSERT INTO queries SET ?";
  // let query = conn.query(sql, data,(err, results) => {
  //   if(err) throw err;
    const {body} = req;
    emailer(body).then(
      res.send(JSON.stringify({"status": 200, "error": null, "response": "email sent"}))
      ); 
  // });
});
 
 
//Server listening
app.listen(3001,() =>{
  console.log('Server started on port 3001...');
});