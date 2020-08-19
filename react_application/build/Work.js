import './Work.less';

import React, { Component } from 'react';

import Portfolio from 'components/Portfolio';

export default class Work extends Component {
	render() {
		return <section id="work">
			<div className="wrapper">
				<h2>My Work</h2>
				<span className="spacer"></span>
				<p>
					Below is featuring my web-design work. Although I’m well versed in Photography and Video I consider my self to be mainly a Web Developer.
				</p>
			</div>
			<Portfolio categories={['all', 'web', 'video']} />
		</section>;
	}
}