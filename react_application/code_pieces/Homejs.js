import React from 'react';

import Highlight from 'react-highlight';
import JSONPretty from 'react-json-pretty';

const Homejs = () => <div id="homejs" className="highlight-section">
			<h3>home.js</h3>
			<Highlight className="json">
				export const home = <JSONPretty data={{
					title: 'Jeffrey Bue\'s Portfolio Site',
					description: 'Coding Coding Coding!',
					slug: 'home',
					id: '/',
					nav: true,
					template: 'react',
					styles: [],
					scripts: ['bundle']
				}}></JSONPretty>
			</Highlight>
		</div>;


export default Homejs;