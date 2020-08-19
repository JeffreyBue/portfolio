import React from 'react';
import Gallery from 'components/Gallery';

const video = () => <iframe src="https://www.youtube.com/embed/tx3e0CaseVI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

export const config = {
	slug: 'nightifell',
	title: 'BARENAKED LADIES: THE NIGHT I FELL ASLEEP AT THE WHEEL MUSIC VIDEO',
	category: 'video',
	images: [
		{
			original: '/portfolio/nightifell/tntFeat1.jpg',
			renderItem: video
		}
	],
	content: () => <div className="content">
		<p>
			This is a music video that I shot with a group of students at the Art Institute of Seattle. Vladimir Korneychuk directed, Rito Cuestas Produced, and I was the Director of Photography. It’s a nice little tale of a guy getting into a car wreck and having a girl being the last thing on his mind.
		</p>
	</div>
}