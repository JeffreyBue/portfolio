import React from 'react';
import Gallery from 'components/Gallery';

const video = () => <iframe src="https://www.youtube.com/embed/AkLM8Ow8iV4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

export const config = {
	slug: 'dulces',
	title: 'Dulces',
	category: 'video',
	images: [
		{
			original: '/portfolio/dulces/dulcesFeat.jpg',
			renderItem: video
		}
	],
	content: () => <div className="content">
		<p>
			Dulces, a Italian Bistro in Morna east of Seattle, has amazing food for sure! I shot this with a DVX200 and I have to say its some of my better photography. There were a couple of shots I thought were great but when I had it analyzed, people found the shots empty and pointless, but I fought to say they were beautiful and deep. It has some nice outro graphics made in After Effects. The ADR was performed by a class mate John Kohen, he had just the right base of voice to make this a great portfolio piece.
		</p>
	</div>
}