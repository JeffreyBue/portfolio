import React from 'react';
import Gallery from 'components/Gallery';

const video = () => <iframe src="https://www.youtube.com/embed/NjUzmOJvomQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

export const config = {
	slug: 'admiralpub',
	title: 'The Admiral Pub',
	category: 'video',
	images: [
		{
			original: '/portfolio/admiralpub/APFeat.jpg',
			renderItem: video
		}
	],
	content: () => <div className="content">
		<p>
			The Admiral Pub is a cosy little bar on the top of the hill in West Seattle, The food is good and the prices are reasonable. They have pool tables and darts… well just watch the commercial. This was my first very first commercial, shot on DSR400 and a DVX200 then edited in FinalCut. I directed, produce, wrote, and catered, basically this was a one man show using real customers as the people in the commercial, and it suuucked, no help really sucks. However it was a great learning experience and it come out pretty good.
		</p>
	</div>
}