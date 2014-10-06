var http = require('http')
var tape = require('tape')
var hyperquest = require('hyperquest')
var concat = require('concat-stream')
var mount = require('./')
var Router = require('routes-router')
var router = mount(Router())

router.prefix('/apples', function(req, res){
	res.end(req.url)
})

router.mount('/apples2', function(req, res){
	res.end(req.url)
})

var server = http.createServer(router)

server.listen(8080, function(){
	tape('normal mode', function(t){
		hyperquest.get('http://127.0.0.1:8080/apples/grannysmith').pipe(concat(function(result){
			t.equal(result.toString(), '/apples/grannysmith', '/apples/grannysmith')
			hyperquest.get('http://127.0.0.1:8080/apples2/grannysmith').pipe(concat(function(result){
				t.equal(result.toString(), '/grannysmith', '/grannysmith')
				server.close()
				t.end()
			}))
		}))
	})
})