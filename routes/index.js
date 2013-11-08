
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Microblog' });
};

exports.user = function(req,res){
	res.render('user', { title: 'Express' });
};

exports.post = function(req,res){
	res.render('user', { title: 'Express' });
};

exports.reg = function(req,res){
	res.render('reg', { title: 'Express' });
};

exports.doReg = function(req,res){
	console.log(req);
	res.send("do reg");
};

exports.login = function(req,res){
	res.render('login', { title: 'Express' });
};

exports.doLogin = function(req,res){
	console.log(req);
	res.send("do login");
};

exports.logout = function(req,res){
	res.send("logout");
};

