import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import Home from 'pages/Home';
import Header from 'build/Header';

const App = () => (
	<Router>
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/next/" render={() => <div><h1>next</h1></div>} />
				<Route render={(match) => {
					console.log(match);
					return <div>OOOppps</div>;
				}} />
			</Switch>
		</div>
	</Router>
);

export default App;