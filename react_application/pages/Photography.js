import './Photography.less';

import React, { Component, Fragment } from 'react';
import { Parallax } from 'react-parallax';

import Images from 'components/Images';

const Photography = () => <main id="photography">
	<Parallax
		bgImage="/images/pictures/photography.jpg"
		bgImageAlt="Photography"
		strength={-100}
	>
		<section id="hero-photography">
			<div className="wrapper">
				<div className="centerV">
					<h1>Photography</h1>
			 	</div>	
			 </div>
		</section>	
	</Parallax>
	<div id="photos">
		<h2>PHOTOGRAPHY</h2>
		<span className="spacer"></span>
		<h2>Welcome to My Photography Page!</h2>
		<p>Below are the some pics of my photographay from the early 2010s.</p>
		<p>I’ve always had a keen eye for composition and making random things look interesting.</p>
		<p>If you have any question on the photography work that I have done, please visit my contact page and send me your inquiry.</p>
		<section>
			<Images />
		</section>
	</div>
</main>;

export default Photography;