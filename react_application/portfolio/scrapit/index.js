import React from 'react';
import Gallery from 'components/Gallery';

const video = () => <iframe src="https://www.youtube.com/embed/zXNKW-dsDgg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

export const config = {
	slug: 'scrapit',
	title: 'Scrap It',
	category: 'video',
	images: [
		{
			original: '/portfolio/scrapit/scrapFeat.jpg',
			renderItem: video
		}
	],
	content: () => <div className="content">
		<p>
			A unprecedented, never seen before masterpiece documentary about scrap booking.
		</p>
		<p>
			I shot, directed, and edited this with a group of students at the Art Institute of Seattle. This was for our first videography class, where we each had to take 3 takes of each Shot, …there were 4 of use. So that was at least 12 takes per shot, there is about 100 shots in the video, so do the math, it’s like 100 million shots. The lights were the worst part, it got so hot and muggy with 6-10 people in the room, yuck. But it came out to be a pretty decent mini doc of a fictitious competitive sport.
		</p>
	</div>
}