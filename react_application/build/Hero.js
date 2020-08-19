import './Hero.less';

import React from 'react';
import { Parallax } from 'react-parallax';

import Scroll from 'components/Scroll';

const Hero = () => <Parallax
	bgImage="/images/pictures/homePic.jpg"
	bgImageAlt="Home"
	strength={-200}
>
	<section id="hero-home">
		<div className="wrapper">
			<div className="centerV">
				<div className="ticker">
					<ul>
						<li>Design</li>
						<li>Development</li>
						<li>Marketing</li>
					</ul>
			 	</div>
			 	<div className="buttons">
			 		<Scroll to="#work" offset="-94">
				 		<a className="btn" >
					 			My Work
					 	</a>
					</Scroll>
			 		<Scroll to="#about" offset="-94">
				 		<a>
							About Me&nbsp;&nbsp;<i className="fas fa-arrow-circle-right"></i>
				 		</a>
				 	</Scroll>
			 	</div>	
		 	</div>	
		 </div>
	</section>
</Parallax>;

export default Hero;