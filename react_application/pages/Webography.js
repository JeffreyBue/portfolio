import './Webography.less';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';


// import Hero from 'build/Hero';
import About from 'build/About';

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
				 		<a className="btn">
				 			My Websites
				 		</a>
				 		<a>
				 			Some Code&nbsp;&nbsp;<i className="fas fa-arrow-circle-right"></i>
				 		</a>
				 	</div>	
			 	</div>	
			 </div>
		</section>	
	</Parallax>
	<About />
</main>;

export default Webography;