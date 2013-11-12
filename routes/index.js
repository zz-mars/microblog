
/*
 * GET home page.
 */

/*
module.exports = function(app) {
	app.get('/',function(req,res){
			res.render('index',{
				title: 'Home'
				});
	});

	app.get('/reg',function(req,res){
			res.render('reg',{
				title: 'Register'
				});
	});
};
*/

var crypto = require('crypto');
var User = require('../node_modules/user.js');

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
	res.render('reg', { title: 'register' });
};

exports.doReg = function(req,res){
	console.log(req.body['password-repeat'] + '--' + req.body['password']);
	if(req.body['password-repeat'] != req.body['password']) {
		req.flash('error','inconsistent inputs');
		return res.redirect('/reg');
	}

	var md5 = crypto.createHash('md5');
	var password = md5.update(req.body.password).digest('base64');

	var newUser = new User({
		name: req.body.username,
		password: password
	});

	// check if user already exists
	User.get(newUser.name,function(err,user){
			if(user){
				err = 'username already exists!';
			}
			// redirect to register if already exist
			if(err){
				req.flash('error',err);
				return res.redirect('/reg');
			}
			// save new user
			newUser.save(function(err){
				req.session.user = newUser;
				req.flash('success','register ok!');
				res.redirect('/');
			});
	});

};

exports.login = function(req,res){
	res.render('login', { title: 'login' });
};

exports.doLogin = function(req,res){
	console.log(req);
	res.send("do login");
};

exports.logout = function(req,res){
	res.send("logout");
};

