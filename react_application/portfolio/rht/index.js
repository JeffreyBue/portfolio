import React from 'react';
import Gallery from 'components/Gallery';

export const config = {
	slug: 'rht',
	title: 'RHT Portal',
	category: 'web',
	images: [
		{
			original: '/portfolio/rht/rht1a.jpg',
		},
		{
			original: '/portfolio/rht/rht2b.jpg',
		},
		{
			original: '/portfolio/rht/rht3a.jpg',
		}
	],
	content: () => <div className="content">
		<p>
			The landingSite Project is a custom made multi-website management system written in HTML, CSS, Javascript, Ajax, and PHP and MYSQL. This project allows for thousands of websites to be launched in a manner of moments then automatically filled with default content, then allows for customization for each individual website. Examples: healthycannabidiol.com, cbdtetra.com, and cbdpowder.com.
		</p>
	</div>
}