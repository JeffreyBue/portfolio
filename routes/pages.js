import express from 'express';
const router = express.Router();
import fs from 'fs';
import sizeOf from 'image-size';
import axios from 'axios';

import * as g from '../config/globals';

/* GET All ROUTEs. */
router.get('/*', (req, res, next) => {
	let pieces = [];
	try {
		pieces = fs.readdirSync(`${g.app_root}/react_application/portfolio/`).filter(file => /^[A-Za-z]+$/.test(file));
	}catch(e){
		console.error(e);
	} 

	res.render(
		g.home.template, 
		{ 
			meta: g.home,
			pieces
		}
	);
});


router.get('/privacypolicy/', (req, res, next) => {
	res.render(
		g.privacypolicy.template,
		{
			meta: g.privacypolicy
		}
	);
});

router.get('/termsandconditions/', (req, res, next) => {
	res.render(
		g.termsandconditions.template,
		{
			meta: g.termsandconditions
		}
	);
});

export default router;