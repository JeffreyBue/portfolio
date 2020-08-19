import React from 'react';
import Gallery from 'components/Gallery';

export const config = {
	slug: 'truthfinder',
	title: 'TruthFinder.com',
	category: 'web',
	images: [
		{
			original: '/portfolio/truthfinder/1tf-941x519.jpg',
		},
		{
			original: '/portfolio/truthfinder/2tf-941x519.jpg',
		},
		{
			original: '/portfolio/truthfinder/3tf-941x519.jpg',
		},
		{
			original: '/portfolio/truthfinder/4tf-941x519.jpg',
		}
	],
	content: () => <div className="content">
		<p>
			<a className="btn" href="https://www.truthfinder.com" title="TruthFinder" target="_blank">Truthfinder.com</a> is a premium background service, I was primarily responsible for the technical SEO efforts. I was the only dev that has created and maintained the people-search directory. The people-search directory has maintained a solid 50 sales a day for over the last year, thats around $1,5000,000 dollars a year in free revenue.
		</p>
		<p className="button">
			<a className="btn" href="https://www.truthfinder.com" title="TruthFinder" target="_blank">
				Go To Truth Finder
			</a>
		</p>
	</div>
}