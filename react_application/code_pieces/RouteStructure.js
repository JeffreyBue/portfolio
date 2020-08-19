import React from 'react';

import * as Fa from 'react-icons/fa';
import * as Di from 'react-icons/di';
import * as Ti from 'react-icons/ti';

import Scroll from 'components/Scroll';

const RouteStructure = () => <div className="stack-section route-structure">
	<h2>
		Project stucture
	</h2>
	<h3>
		GitHub: <a href="https://github.com/JeffreyBue/portfolio" target="_blank">https://github.com/JeffreyBue/portfolio</a>
	</h3>
	<p>
		<Di.DiNodejs className="align" /> jeffreybue.com
	</p>
	<p>
		---- <Fa.FaFolder className="align" /> bin
	</p>
	<p>
		-------- <Fa.FaFile className="align" /> www
	</p>
	<p>
		---- <Fa.FaCogs className="align" /> config
	</p>
	<p>
		-------- <Fa.FaFolder className="align" /> pages
	</p>
	<p>
		------------ <Di.DiJavascript1 className="align" /> <Scroll to="#homejs" offset="-94">
			<a>
				home.js
			</a>
		</Scroll> 
	</p>
	<p>
		-------- <Di.DiJavascript1 className="align" /> <Scroll to="#globals" offset="-94">
			<a>
				globals.js
			</a>
		</Scroll> 
	</p>
	<p>
		---- <Fa.FaFolder className="align" /> db
	</p>
	<p>
		-------- <Di.DiJavascript1 className="align" /> <Scroll to="#connectionjs" offset="-94">
			<a>
				connection.js
			</a>
		</Scroll> 
	</p>
	<p>
		---- <Fa.FaFolder className="align" /> node_modules
	</p>
	<p>
		---- <Fa.FaFolder className="align" /> <Scroll to="#public" offset="-94">
			<a>
				public
			</a>
		</Scroll> 
	</p>
	<p>
		-------- <Di.DiLess className="align" /> <Scroll to="#stylesheets" offset="-94">
			<a>
				stylesheets
			</a>
		</Scroll> 
	</p>
	<p>
		---- <Di.DiReact className="align" /> <Scroll to="#reactapplication" offset="-94">
			<a>
				react_application
			</a>
		</Scroll> 
	</p>
	<p>
		---- <Fa.FaFolder className="align" /> rethinkdb_data
	</p>
	<p>
		---- <Fa.FaFolder className="align" /> routes
	</p>
	<p>
		-------- <Di.DiJavascript1 className="align" /> pages.js
	</p>
	<p>
		---- <Fa.FaFolder className="align" /> views
	</p>
	<p>
		-------- <Fa.FaFolder className="align" /> build
	</p>
	<p>
		-------- <Fa.FaFolder className="align" /> pages
	</p>
	<p>
		------------ <Di.DiJavascript1 className="align" /> home.ejs
	</p>
	<p>
		-------- <Fa.FaFolder className="align" /> templates
	</p>
	<p>
		------------ <Di.DiJavascript1 className="align" /> home.ejs
	</p>
	<p>
		---- <Fa.FaFile className="align" /> .babelrc
	</p>
	<p>
		---- <Fa.FaFile className="align" /> .eslintrc
	</p>
	<p>
		---- <Di.DiJavascript1 className="align" /> app.js
	</p>
	<p>
		---- <Di.DiJavascript1 className="align" /> eslintrc.js
	</p>
	<p>
		---- <Di.DiNpm className="align" /> <Scroll to="#packagejson" offset="-94">
			<a>
				package.json
			</a>
		</Scroll>
	</p>
	<p>
		---- <Di.DiJavascript1 className="align" /> start.js
	</p>
	<p>
		---- <Di.DiJavascript1 className="align" /> webpack.config.js
	</p>
</div>;

export default RouteStructure;