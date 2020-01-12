var mqtt = require('mqtt')
var options={
clientId:"mqttjs01",
username:"qlnzqwhk",
password:"ojPBiWN32mq_",
port:12241};
var client = mqtt.connect("mqtt://tailor.cloudmqtt.com",options);
//console.log("connected flag  " + client.connected);

client.on('connect', function () {
  client.subscribe('heroku');
})

client.on('message', function (topic, message) {
	  console.log(message.toString());
})