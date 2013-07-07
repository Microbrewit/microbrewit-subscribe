var http = require('http'),
  url = require('url'),
  mysql = require('mysql');

exports.mail = function (req, res) {

  connection = mysql.createConnection({
	  host	: 'localhost',
	  user	: 'userhere',
	  password : 'insertpass',
          database : 'microbrewit'});

  connection.connect();
  var param = url.parse(req.url, true).query,
    name = param.name,
    email = param.email;
  connection.query('INSERT INTO subscribers SET email =?, name=?', [email, name]);
  connection.end();
  console.log('Name: ' + name + ' Email: ' + email);
  res.render('success', { title: 'Microbrewit' });
};
