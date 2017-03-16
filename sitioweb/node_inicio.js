var http = require("http")
var fs =   require("fs")

html = fs.readFile("./main.html", function(err,html){
	http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html"})
	res.write(html);
	res.end();
	}).listen(8080)
})
