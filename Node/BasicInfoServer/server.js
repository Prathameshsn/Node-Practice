
var express = require('express');
var app = express();
var mysql = require('mysql');
const bodyparser = require('body-parser');
var userData = [];

app.use(bodyparser.urlencoded({
  extended: true,
}));
app.use(bodyparser.json());
// middleware for browser header issue handle
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Headers", 'Origin, Content-Type, Accept, X-Requested-With');
  res.setHeader("Access-Control-Allow-Methods", 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'basicinfoapp'
})

// DB connection
connection.connect(function (error) {
  if (error) {
    console.log("connection failed");
  } else {
    console.log("connection done");
    getUserData();
  }
});

function getUserData() {
  connection.query('select * from userdata', function (error, results) {
    if (error) {
      throw error;
    } else {
      userData = results;
    }
  })
}

app.get('/getUserData', function(req, res) {
  res.send(JSON.stringify({code: 200, data: userData }));
})

app.get('/signin', function (req, res) {
  let isCredentialsMatchFlag = false;
  let data = {};
  // checking credentials matching with exsting data or not 
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].user_id === req.query.user_id && userData[i].password === req.query.password) {
      isCredentialsMatchFlag = true;
      data = { user_id: userData[i].user_id, isprofilecomplete: userData[i].isprofilecomplete };
    }
  }
  if (isCredentialsMatchFlag) {
    res.send(JSON.stringify({ code: 200, data: data }));
  } else {
    res.send(JSON.stringify({ code: 500 }));
  }
});

app.post('/signup', function (req, res) {
  var isUserIdExistFlag = false;
  if (userData) {
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].user_id === req.body.user_id) {
        isUserIdExistFlag = true;
        break;
      }
    }
    if (isUserIdExistFlag) {
      res.send(JSON.stringify('User already exist'))
    } else {
      addUser(req, res);
    }
  }
})

function addUser(req, res) {
  const query = 'INSERT INTO userdata (name, user_id, password, email_id, phone_number, isprofilecomplete) VALUES ("' + req.body.name + '","' + req.body.user_id + '","' 
  + req.body.password + '","' + req.body.email_id + '","' + req.body.phone_number + '","false")';
  connection.query(query, function (error, results) {
    if (error) {
      console.log(error);
    } else {
      getUserData();
      console.log(results);
    }
  });
  res.send(JSON.stringify('user added successfully'))
}

app.get('/getUserDataByUserId', function(req, res) {
  const query = 'select * from userdata where user_id="'+ req.query.user_id +'"';
  connection.query(query, function (error, results) {
    if (error) {
      throw error;
    } else {
      res.send(JSON.stringify({ code: 200, data: results[0] }));
    }
  })
});

app.put('/updateUserData', function(req, res) {})
app.listen(3000);