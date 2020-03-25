import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import lessMiddleware from 'less-middleware';
import subdomain from 'express-subdomain';
import ejs from 'ejs';
import MobileDetect from 'mobile-detect';

import * as GLOBALS from './config/globals';

const app = express();

//---------------------------------------------------------
if(app.get('env') == 'development') {
	
	if(process.env.react) {
		// Dev Server
		const webpackConfig = require('./webpack.config.js');
		const webpack = require('webpack');
		const middleware = require('webpack-dev-middleware');
		const compiler = webpack(webpackConfig);
		
		app.use(middleware(compiler, {
		  publicPath: `http://localhost:${GLOBALS.port}/`,
		  hot: true
		}));
	}

	// Compiling of Less
	app.use(lessMiddleware(
		path.join(__dirname, 'public', 'stylesheets', 'less'), 
		{
			dest: path.join(__dirname, 'public'),
			preprocess: {
	   			path: function(pathname, req) {
	   				const fileArray = pathname.split('/');
	   				const filename = fileArray[fileArray.length -1];
	      			return path.join(__dirname, 'public', 'stylesheets', 'less', filename);
	    		}
	  		},
	  		render: {
			    paths: [ path.join(__dirname, 'public', 'stylesheets', 'less', 'reference') ]
			 }
		}
	));
}

//---------------------------------------------------------

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
ejs.delimiter = "?";
app.set('views', path.join(__dirname, 'views/templates'));
app.set('view engine', 'ejs');

//---------------------------------------------------------

// Setting Global Variables
app.locals = GLOBALS;

// isMobile
app.use((req, res, next) => {
	const isMobile = new MobileDetect(req.headers['user-agent']);
	res.locals.isMobile = isMobile.mobile() || false;
	next();
});

//---------------------------------------------------------

// connect to db
import dbConnect from './db/connection';
app.use(dbConnect);

//---------------------------------------------------------

// Session Setup and Check
const session = require('client-sessions');
app.use(session({
	cookieName: 'cmsSession',
	secret: 'th1515acryt0charact3r5w1thabunch0fl3tt3r5andnumb3r5',
	duration: 24 * 60 * 1000,
	activeDuration: 5 * 60 * 1000,
	httpOnly: true,
	secure: false,
	cookie: {
		path: '/',
		maxAge: 24 * 60 * 1000
	}
}))

//---------------------------------------------------------

// Routes:
import pages from './routes/pages';
// import api from './routes/api';

app.use('/', pages);
// app.use('/api/', api);
//---------------------------------------------------------

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', 		{ 
			meta: {
				title: `${err.status} ERROR`,
				description: 'Something Went Wrong',
				slug: 'error',
				id: '/',
				nav: true,
				styles: ['error'],
				scripts: ['error'],
				message: err.message,
				error: err
			}
		}
);
});

//---------------------------------------------------------

export default app;