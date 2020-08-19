import React from 'react';

import Highlight from 'react-highlight';
import Scroll from 'components/Scroll';

const Globals = () => <div id="globals" className="highlight-section">
			<h3>globals.js</h3>
			<p className="description">
				I use this file to set global variables to use in the view and the config for each of individual pages, like <Scroll to="#homejs" offset="-94"><a>home.js</a></Scroll>. 
			</p>
			<Highlight className="javascript">
				<p>import express from 'express';</p>
				<p>import path from 'path';</p>
				<p>import fs from 'fs';</p>
				<p>&nbsp;</p>
				<p>const app = express();</p>
				<p>&nbsp;</p>
				<p>export const enviroment = app.get('env') == 'development' ? 'development' : 'production';</p>
				<p>&nbsp;</p>
				<p>export const app_root = path.resolve('./');</p>
				<p>export const public_root = path.join(path.resolve('./'), 'public');</p>
				<p>export const views_root = path.join(path.resolve('./'), 'views');</p>
				<p>&nbsp;</p>
				<p>export const port = process.env.PORT;</p>
				<p>&nbsp;</p>
				<p>export const site_domain = 'jeffreybue.com';</p>
				<p>export const site_name = 'Jeffrey Bue';</p>
				<p>export const site_root = 'http://www.jeffreybue.com:'+port;</p>
				<p>&nbsp;</p>
				<p>export {' home '} from './pages/home.js';</p>
			</Highlight>
		</div>
		
;

export default Globals;