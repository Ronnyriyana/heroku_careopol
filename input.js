var mqtt = require('mqtt')
var options={
clientId:"mqttjs01",
username:"qlnzqwhk",
password:"ojPBiWN32mq_",
port:12241};
var client = mqtt.connect("mqtt://tailor.cloudmqtt.com",options);
//console.log("connected flag  " + client.connected);
//Z1zc35^m
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "hedon",
  password: "Z1zc35^m",
  database: "coba_query"
});

client.on('connect', function () {
  client.subscribe('heroku');
})

con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
});

client.on('message', function (topic, message) {
	  console.log(message.toString());
	  //var data_message = JSON.parse(message);
	  var sql = "INSERT INTO genres (name, slug) VALUES ('Company Inc polusi', '"+message+"')";
	  con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("1 record inserted");
	  });
})