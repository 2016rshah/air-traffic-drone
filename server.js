app = require('express.io')()
app.http().io()

var arDrone = require('ar-drone');
var client  = arDrone.createClient();

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/annyang-test.html')
})

app.io.route('hello', function(req){
	console.log('hello')
	req.io.respond({
		success: "hello there!"
	})
})

app.io.route('takeoff', function(req){
	console.log("taking off")
	client.takeoff()
	req.io.respond({
		success: "taken off"
	})
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})