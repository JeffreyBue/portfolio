import './Webography.less';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';


import Scroll from 'components/Scroll';
import About from 'build/About';
import Portfolio from 'components/Portfolio';
import SomeCode from 'build/SomeCode';

const Webography = () => <main id="webography">
	<Parallax
		bgImage="/images/pictures/webography.jpg"
		bgImageAlt="Webography"
		strength={-100}
	>
		<section id="hero-webography">
			<div className="wrapper">
				<div className="centerV">
					<h1>Webography</h1>
				 	<div className="buttons">
				 		<Scroll to="#websites" offset="-94">
					 		<a className="btn">
					 			My Websites
					 		</a>
					 	</Scroll>
				 		<Scroll to="#some-code" offset="-94">
					 		<a>
					 			Some Code&nbsp;&nbsp;<i className="fas fa-arrow-circle-right"></i>
					 		</a>
					 	</Scroll>
				 	</div>	
			 	</div>	
			 </div>
		</section>	
	</Parallax>
	<div id="websites">
		<h2>My Sites</h2>
		<span className="spacer"></span>
		<h2>Welcome to My Webography Page!</h2>
		<p>
			“Webography” is a term I use to describe the fullstack development work that I’ve done. From backend development, creating servers, configuring NGINX configs, node.js, etc, to front-end code, writing javascript, search engine optimizations, React, etc, it pretty much embodies the life cycle of the online experience. If you have any question or would like some web work done, please visit my <a href="http://jeffreybue.com/contact/">contact</a> page and send me your inquiries.
		</p>
	</div>
	<Portfolio categories={['web', 'all']} />
	<SomeCode />
</main>;

export default Webography;