import './Videography.less';

import React, { Component, Fragment } from 'react';
import { Parallax } from 'react-parallax';

import Portfolio from 'components/Portfolio';

const Videography = () => <main id="videography">
	<Parallax
		bgImage="/images/videographer.jpg"
		bgImageAlt="Videography"
		strength={-100}
	>
		<section id="hero-videography">
			<div className="wrapper">
				<div className="centerV">
					<h1>Videography</h1>
			 	</div>	
			 </div>
		</section>	
	</Parallax>
	<div id="videos">
		<h2>VIDEOGRAPHY</h2>
		<span className="spacer"></span>
		<h2>Welcome to My Videography Page!</h2>
		<p>
			Below are my videos I have here on this site. I’ve been shooting videos since 2007.
		</p>
		<p>
			If you have any question please visit my contact page and send me your inquery.
		</p>
	</div>
	<Portfolio categories={['video', 'all']} />
</main>;

export default Videography;