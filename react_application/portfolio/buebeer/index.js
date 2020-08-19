import React from 'react';
import Gallery from 'components/Gallery';

export const config = {
	slug: 'buebeer',
	title: 'BueBeer.com',
	category: 'web',
	images: [
		{
			original: '/portfolio/buebeer/feature.jpg',
		},
		{
			original: '/portfolio/buebeer/1bb.jpg',
		},
		{
			original: '/portfolio/buebeer/2bb.jpg',
		}
	],
	content: () => <div className="content">
		<p>
			My First ever site, it's has grown over the years but it's still up and running ever changing how the world sees beer!
		</p>
		<p>
			Originally just a straight HTML website served from the baby package at Hostgator, it's now a NODE.js Express app that uses a Rethink DB to store content and meta data.
		</p>
		<p className="button">
			<a className="btn" href="http://www.buebeer.com" title="BueBeer" target="_blank">
				Go To BueBeer
			</a>
		</p>
	</div>
}