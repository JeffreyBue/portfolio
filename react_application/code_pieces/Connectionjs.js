import React from 'react';

import Highlight from 'react-highlight';
import JSONPretty from 'react-json-pretty';

import Tab from 'components/Tab';

const Connectionjs = () => <div id="connectionjs" className="highlight-section">
			<h3>connection.js</h3>
			<p className="description">
				This establishes a connect to the database and makes it readily available on the req object in Node.
			</p>
			<Highlight className="javascript">
				import r from 'rethinkdbdash';
				<br/>
				const rethinkdb = r({'port: 39601'});
				<br/>
				<br/>
				const dbConnect = (req, res, next) => {'{'}<br/>
					<Tab />{'req.database = rethinkdb;'}
					<br/>
					<Tab />{'next();'}
					<br/>
				{'}'};
				<br/>
				<br/>
				export function rethink() {'{'}<br/>
					<Tab />{'return rethinkdb;'}
				<br/>{'}'};
				<br/>
				<br/>
				export default dbConnect;
			</Highlight>
		</div>


export default Connectionjs;