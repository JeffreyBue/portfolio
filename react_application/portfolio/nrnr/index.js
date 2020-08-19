import React from 'react';
import Gallery from 'components/Gallery';

const video = () => <iframe src="https://www.youtube.com/embed/VzehzyQ-9Cc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

export const config = {
	slug: 'nrnr',
	title: 'Shooter\'s reel',
	category: 'video',
	images: [
		{
			original: '/portfolio/nrnr/nrnrFeat.jpg',
			renderItem: video
		}
	],
	content: () => <div className="content">
		<p>
			My Shooters Reel! A short capture of all my greatest shots. Most of it shot on a DVX200 some on a DSR400. Edited in FinalCut. It took for ever to find the right music but this sound track handles just right. A little big of fractal noise from After Effects was used at the end for my Name. From time to time I still come back and watch this, remembering what I’ve once done. It’s a nice little piece, hopefully I can add more to it in the future.
		</p>
	</div>
}