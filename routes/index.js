
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.user = function(req,res){
	res.send("user");
};

exports.post = function(req,res){
	res.send("post");
};

exports.reg = function(req,res){
	res.send("register");
};

exports.doReg = function(req,res){
	res.send("do register");
};

exports.login = function(req,res){
	res.send("login");
};

exports.doLogin = function(req,res){
	res.send("do login");
};

exports.logout = function(req,res){
	res.send("logout");
};

