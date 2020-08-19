import React from 'react';
import Gallery from 'components/Gallery';

const video = () => <iframe src="https://www.youtube.com/embed/iETvC8Znnv4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

export const config = {
	slug: 'madison',
	title: 'Madison Square Bakery',
	category: 'video',
	images: [
		{
			original: '/portfolio/madison/MPBFeat.jpg',
			renderItem: video
		}
	],
	content: () => <div className="content">
		<p>
			The Madison park Bakery is a small Bakery in the middle of Madison Park which is east on the outskirts of Downtown Seattle. This is one of the three commercials that I wrote, shot, directed, and edited at the Art Institute of Seattle. Shooting this was pretty simple it took about an hr. I shot it on a DVX200, all house lighting, like I said it was pretty simple and the desserts were great!
		</p>
	</div>
}