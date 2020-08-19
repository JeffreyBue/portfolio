import React from 'react';

import Highlight from 'react-highlight';
import JSONPretty from 'react-json-pretty';
import * as Fa from 'react-icons/fa';
import * as Di from 'react-icons/di';

import Tab from 'components/Tab';
import Scroll from 'components/Scroll';

const Stylesheets = () => <div id="stylesheets" className="highlight-section">
			<h3>StyleSheets</h3>
			<p className="description">
				So there's a couple of ways that I work with styles in this set up.
				<br/>
				The file structure is like this below:
			</p>
			<Highlight className="plaintext">
				<p>
					-- <Fa.FaFolder className="align" /> stylesheets
				</p>
				<p>
					---- <Fa.FaFolder className="align" /> less
				</p>
				<p>
					------ <Fa.FaFolder className="align" /> reference
				</p>
				<p>
					-------- <Di.DiLess className="align" /> variables.less
				</p>
				<p>
					------ <Di.DiLess className="align" /> main.less
				</p>
				<p>
					---- <Di.DiCss3 className="align" /> main.css
				</p>
			</Highlight>
			<p className="description">
				The variables.less file has all my default styles, mixins, and generic formats of elements and I import that in my .less files for reference.
			</p>
			<h4>variables.less</h4>
			<Highlight className="less">
				....
				<br/>
				@green : #006837;
				<br/>
				@light-green: lighten(@green, 10%);
				<br/>
				@lighter-green: lighten(@green, 20%);
				....
				@headingBolder : GaramondBolder, 'Times New Roman', serif;
				<br/>
				@headingBolderItalic : GaramondBolderItalic, 'Times New Roman', serif;
				<br/>
				<br/>
				.clearfix() {'{'}
				<br/>
				<Tab />*zoom: 1;
				<br/>
				<Tab />&:before,
				<br/>
				....
			</Highlight>
			<h4>main.less</h4>
			<Highlight className="less">
				@import 'variables.less';
			</Highlight>
			<p className="description">
				When compliled with the lessMiddleware package from npm inside of app.js, it outputs a compressed css file at the root of stylesheets.
			</p>
			<h4>app.js</h4>
			<Highlight className="javascript">
				....
				<br/>
				{'app.use(lessMiddleware('}
				<br/>
					<Tab />{'path.join(__dirname, "public", "stylesheets", "less"), '}
					<br/>
					<Tab />{'{'}
					<br/>
						<Tab /><Tab />{'dest: path.join(__dirname, "public"),'}
						<br/>
						<Tab /><Tab />{'preprocess: {'}
						<br/>
				   			<Tab /><Tab /><Tab />{'path: function(pathname, req) {'}
				   			<br/>
				   				<Tab /><Tab /><Tab /><Tab />{'const fileArray = pathname.split("/");'}
				   				<br/>
				   				<Tab /><Tab /><Tab /><Tab />{'const filename = fileArray[fileArray.length -1];'}
				   				<br/>
				      			<Tab /><Tab /><Tab /><Tab />{'return path.join(__dirname, "public", "stylesheets", "less", filename)'};
				    		<br/><Tab /><Tab /><Tab />{'}'}
				  		<br/><Tab /><Tab />{'},'}
				  		<br/><Tab /><Tab />{'render: {'}
						    <br/><Tab /><Tab /><Tab />{'paths: [ path.join(__dirname, "public", "stylesheets", "less", "reference") ]'}
						<br/><Tab /><Tab />{'}'}
					<br/><Tab />{'}'}
				<br/>
				{'));'}
				<br/>
				....
			</Highlight>
				<p className="description">
					Also when deving the React App, I use webpack to compile the less on import of the component the less is for.
				</p>
				<h4>SomeComponent.js</h4>
				<Highlight className="javascript">
					import './SomeLess.less';
					<br/>
					....
				</Highlight>
				<h4>SomeLess.less</h4>
				<Highlight className="javascript">
					@import '~stylesheets/less/reference/variables.less';
					<br/>
					.... styles for component
				</Highlight>
				<p className="description">
					The tilde(~) character above references either of the paths below in the resolve property of the webpack.config.js file.
					<br/>
					" path.resolve(__dirname, 'public')] " represents the tilde character
				</p>
				<h4>
					<Scroll to="webpackjs" offset="-94">
						<a>
							webpack.config.js
						</a>
					</Scroll>
				</h4>
				<Highlight className="javascript">
				....<br/>
				{'resolve: {'}
				<br/>
				<Tab />{"extensions: ['*', '.js', '.jsx'],"}
				<br/>
				<Tab />{"modules: [path.resolve(__dirname, 'react_application'), 'node_modules', path.resolve(__dirname, 'public')],"}
				<br/>
				<Tab />{"symlinks: false,"}
				<br/>
				<Tab />{"alias: {"}
				<br/>
				<Tab /><Tab />{"'react-dom': '@hot-loader/react-dom'"}
				<br/>
				<Tab />{"}"}
				<br/>
				{"},"}
				<br/>
				....
			</Highlight>
		</div>;

export default Stylesheets;