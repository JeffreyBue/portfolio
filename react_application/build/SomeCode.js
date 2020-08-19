import './SomeCode.less';

import React from 'react';
import Highlight from 'react-highlight';
import * as Fa from 'react-icons/fa';
import * as Di from 'react-icons/di';
import * as Ti from 'react-icons/ti';
import JSONPretty from 'react-json-pretty';

import Scroll from 'components/Scroll';

import RouteStructure from 'code_pieces/RouteStructure';
import Globals from 'code_pieces/Globals';
import Homejs from 'code_pieces/Homejs';
import Packagejson from 'code_pieces/Packagejson';
import Connectionjs from 'code_pieces/Connectionjs';
import Public from 'code_pieces/Public';
import Stylesheets from 'code_pieces/Stylesheets';
import ReactApplication from 'code_pieces/ReactApplication';

const Tab = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

const SomeCode = () => <section id="some-code">
	<div className="wrapper">
	    <div className="intro">
		    <h2>SOME CODE</h2>
			<span className="spacer"></span>
			<p>
				On my old Wordpress site I had below was some of my custom code from way back in 2014. I’ve came a long way since then. Now I have updated code that reflects my current code from the early 20s. 
			</p>
			<p>
				I'm going to run down the setup custom build for this specific website; jeffreybue.com. So below you'll see what helped me achieve a more dynamic, reactful website.
			</p>
			<p>
				I'm not going to show everything, but just some main custom stuff, if there's any feedback you'd like to share from bad or good, please let me know I would like to here about it!
			</p>
			<span className="spacer"></span>
		</div>
		<div className="stack-section ">
			<h2>
				<a href="http://jeffreybue.com" title="JeffreyBue.com">JeffreyBue.com</a>
			</h2>
		</div>
		<div className="stack-section ">
			<h3>Server &amp; Stack</h3>
			<p>
				Ubuntu 14.04.5 LTS
				<br/> 
				Nginx: nginx/1.4.6 (Ubuntu)
				<br/>
				Node v12.12.0
				<br/>
				NPM 6.11.3
				<br/>
				Rethinkdb: 2.3.6~0trusty (GCC 4.8.2)
			</p>
		</div>
		<div className="stack-section ">
			<h3>Application Framework</h3>
			<p>
				Node Express app
				<br/>
				Node Express Routing
				<br/>
				View Type: .ejs
				<br/>
				Style type: .less
				<br/>
				React Application ^16.10.1
				<br/>
				Tooled by Webpack ^4.41.0
			</p>
		</div>
		<RouteStructure />
		<Homejs />
		<Globals />
		<Packagejson />
		<Connectionjs />
		<Public />
		<Stylesheets />
		<ReactApplication />
	</div>
</section>

export default SomeCode;