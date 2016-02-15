module.exports = function(router) {
	router.post('/login', function(req, res) {
    var success = req.body.password == 'test';

    if (success) {
      res.status(200);
      res.send();
    }
    else {
      res.status(403);
      res.send('Access Denied');
    }
	});
}
