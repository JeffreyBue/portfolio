import express from 'express';
const router = express.Router();
import fs from 'fs';
import sizeOf from 'image-size';
import nodemailer from 'nodemailer';

import * as g from '../config/globals';

/* GET home page. */
router.get('/', function(req, res, next) {
  	fs.readdir(`${g.app_root}/react_application/portfolio/`, (err, files) => {
  		if(err) res.send([]); 
  		res.send(files.filter(file => /^[A-Za-z]+$/.test(file)));
  	});
});

router.get('/getimages/', (req, res, next) => {
	const imagesRoute = '/images/portfolio/'
	fs.readdir(`${g.public_root}${imagesRoute}`, (err, files) => {
		const imageSet = files.map(image => {
			if(['jpg', 'png', 'JPG', 'jpeg', 'bmp'].includes(image.split('.')[1])) {
				const d = sizeOf(`${g.public_root}${imagesRoute}${image}`);
				return {
					src: `${imagesRoute}${image}`,
					height: d.height,
					width: d.width
				};
			}else {
				return false;
			}
		}).filter(set => set);

		res.send(imageSet);
	});	
});

router.post('/email/', (req, res, next) => {
	const note = req.body.note.replace(/[^0-9 \n\r/:a-zA-Z-@."',.?]/g,'');

	var transporter = nodemailer.createTransport({
	  host: 'smtp.dreamhost.com',
	  port: '465',
	  auth: {
	    user: 'bue@jeffreybue.com',
	    pass: 'Backl7ght'
	  }
	});

	var mailOptions = {
	  from: 'bue@jeffreybue.com',
	  to: 'jeffbue@yahoo.com',
	  subject: 'Message From Jeffreybue.com',
	  text: note
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	    res.status(500).send('failed');
	  } else {
	    console.log('Email sent: ' + info.response);
	    res.status(200).send('sent');
	  }
	});
});


export default router;