routes-router-mount
===================

[![Travis](http://img.shields.io/travis/binocarlos/routes-router-mount.svg?style=flat)](https://travis-ci.org/binocarlos/routes-router-mount)

Call `prefix` on a [routes-router](https://github.com/Raynos/routes-router) and remove the prefix from the req.url

## install

```bash
$ npm install routes-router-mount
```

## usage

Wrap a routes-router to get a `mount` method:

```js
var http = require('http')
var mount = require('routes-router-mount')
var Router = require('routes-router')
var router = mount(Router())

router.prefix('/apples', function(req, res){
	res.end(req.url)
})

router.mount('/apples2', function(req, res){
	res.end(req.url)
})

http.createServer(router).listen(8080)
```

Then GET some urls:

```bash
$ curl -L http://127.0.0.1:8080/apples/grannysmith
$ curl -L http://127.0.0.1:8080/apples2/grannysmith
```

Would print:

```
/apples/grannysmith
/grannysmith
```

## licence

MIT