import React from 'react';
import Gallery from 'components/Gallery';

export const config = {
	slug: 'digitaltipmarketing',
	title: 'DigitalTipMarketing.com',
	category: 'web',
	images: [
		{
			original: '/portfolio/digitaltipmarketing/dtmG1.jpg',
		},
		{
			original: '/portfolio/digitaltipmarketing/dtmG2.jpg',
		},
		{
			original: '/portfolio/digitaltipmarketing/dtmG3.jpg',
		}
	],
	content: () => <div className="content">
		<p>
			<a href="http://digitaltipmarketing.com" title="Digital Tip Marketing" target="_blank">Digital Tip Marketing</a> is a Web Design company that I’m starting as my freelance business. It is a professional business site, that has detailed descriptions of my latest work.(..it does not have my latest work.)
		</p>
		<p>
			Converted the HTML template Showcase into a WordPress theme. Using PHP, Javascript, and AJAX I’ve integrated with the Facebook SDK and MailChimp API and created a Quick Quote Form to capture potential clients information. Also using custom post types I have to the ability to add portfolio pieces with ease and precision.
		</p>
		<p>
			Vincent Tellez bridged off the original template and designed the look to perfection. As the designer he brought life and colorfulness to a seemingly bland template.
		</p>
		<p className="button">
			<a className="btn" href="http://digitaltipmarketing.com" title="Digital Tip Marketing" target="_blank">
				Go To Digital Tip Marketing
			</a>
		</p>
	</div>
}