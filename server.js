app = require('express.io')()
app.http().io()

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/annyang-test.html')
})

app.io.route('hello', function(req){
	console.log('hello')
	req.io.respond({
		success: "hello there!"
	})
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})