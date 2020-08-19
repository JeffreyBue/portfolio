import React from 'react';
import Gallery from 'components/Gallery';

export const config = {
	slug: 'blowpop',
	title: 'Blow Pop Dry Bar',
	category: 'web',
	images: [
		{
			original: '/portfolio/blowpop/bp1a.jpg',
		},
		{
			original: '/portfolio/blowpop/bp2a.jpg',
		},
		{
			original: '/portfolio/blowpop/bp3a.jpg',
		}
	],
	content: () => <div className="content">
		<p>
			WordPress theme Cutting Edge, utilizing this theme I designed and developed every highlight that this business has to offer. I also custom coded the lead capture conventions resulting in higher sales.
		</p>
	</div>
}