import express from 'express';
const router = express.Router();
import fs from 'fs';
import sizeOf from 'image-size';
import axios from 'axios';

import * as g from '../config/globals';

/* GET All ROUTEs. */
router.get('/*', (req, res, next) => {
	res.render(
		g.home.template, 
		{ 
			meta: g.home
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