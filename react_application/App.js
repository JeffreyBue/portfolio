import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import Header from 'build/Header';
import Footer from 'build/Footer';
import Home from 'pages/Home';
import Webography from 'pages/Webography';

const App = () => (
	<Router>
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/webography/" component={Webography} />
				<Route exact path="/videography/" render={() => <div><h1>Videography</h1></div>} />
				<Route exact path="/photography/" render={() => <div><h1>Photography</h1></div>} />
				<Route exact path="/contact/" render={() => <div><h1>Contact</h1></div>} />
				<Route render={(match) => {
					console.log(match);
					return <div>OOOppps</div>;
				}} />
			</Switch>
			<Footer />
		</div>
	</Router>
);

export default App;