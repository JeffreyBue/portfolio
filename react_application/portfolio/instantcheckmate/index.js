import React from 'react';
import Gallery from 'components/Gallery';

export const config = {
	slug: 'instantcheckmate',
	title: 'Instantcheckmate.com',
	category: 'web',
	images: [
		{
			original: '/portfolio/instantcheckmate/1inc-941x519.jpg',
		},
		{
			original: '/portfolio/instantcheckmate/2inc-941x519.jpg',
		}
	],
	content: () => <div className="content"><p>
			InstantCheckmate.com is the world’s leading background check platform. I was primarily responsible for the sites technical SEO operations. I can confidently say that I and with the work of 3 other people brought this sites SEO sales from 30 a day to over 500 day in a little over a year. Thats a projected revenue increase of over $20,000,000 dollars a year!
		</p>
		<p className="button">
			<a className="btn" href="http://www.instantcheckmate.com" title="Instantcheckmate" target="_blank">
				Go To Instant Checkmate
			</a>
		</p>
	</div>
}