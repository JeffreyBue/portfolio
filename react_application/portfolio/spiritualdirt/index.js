import React from 'react';
import Gallery from 'components/Gallery';

export const config = {
	slug: 'spiritualdirt',
	title: 'SpiritualDirt.com',
	category: 'web',
	images: [
		{
			original: '/portfolio/spiritualdirt/1spd.jpg',
		}
	],
	content: () => <div className="content">
		<p>
			Spiritualdirt.com is my first ever Node.js / Express app. It was an idea I had when I was thinking about winning the lottery, I was looking at the beach and wondered how many grains a sands there were, and if I were to sell enough grains a sand, each for a fraction of a cent, I wouldn’t have to win the lottery. Also it was a great excuse to get experience on node.js
		</p>
		<p className="button">
			<a className="btn" href="http://www.spiritualdirt.com" title="Spiritual Dirt" target="_blank">
				Go To Spiritual Dirt
			</a>
		</p>
	</div>
}