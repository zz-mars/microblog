
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var MongoStore = require('connect-mongo')(express);
var settings = require('./settings');

var app = express();

app.configure(function(){
		app.set('port', process.env.PORT || 3000);
		app.set('views',__dirname + '/views');
		app.set('view engine','jade');

//		app.use(express.bodyParser());

		app.use(express.methodOverride());
		app.use(express.urlencoded());
		app.use(express.json());

		app.use(express.cookieParser());
		app.use(express.session({
secret: settings.cookieSecret,
store: new MongoStore({
db: settings.db
	})
		}));
		app.use(app.router);
//		app.use(app.router(routes));
		app.use(express.static(__dirname + '/public'));
});

// all environments
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.configure('development',function(){
	app.use(express.errorHandler({dumpExceptions: true,showStack: true}));
});

app.configure('production',function(){
	app.use(express.errorHandler());
});

/*
app.dynamicHelpers({
	user: function(req,res){
		return req.session.user;
	},

	error: function(req,res){
		var err = req.flash('error');
		if(err.length){
			return err;
		}
		return null;
	},
	
	success: function(req,res){
		var succ = req.flash('success');
		if(succ.length){
			return succ;
		} else {
			return null;
		}
	}
});
*/

app.get('/', routes.index);
app.get('/u/:user',routes.user);
app.post('/post',routes.post);
app.get('/reg',routes.reg);
app.post('/reg',routes.doReg);
app.get('/login',routes.login);
app.post('/login',routes.doLogin);
app.get('/logout',routes.logout);

http.createServer(app).listen(app.get('port'), "192.168.0.23",function(){
  console.log('Express server listening on port ' + app.get('port'));
});
