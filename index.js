module.exports = function(router){
	router.mount = function(path, fn){
		return router.prefix(path, function(req, res){
			req.url = req.url.substr(path.length)
			fn(req,res)
		})
	}
	return router
}