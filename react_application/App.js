import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import { connect } from 'react-redux';

import Header from 'build/Header';
import Footer from 'build/Footer';
import Home from 'pages/Home';
import Webography from 'pages/Webography';
import Videography from 'pages/Videography';
import Photography from 'pages/Photography';
import Contact from 'pages/Contact';
import ToTop from 'components/ToTop';

import { getPieces } from './rootDuck';

const mapStateToProps = state => ({
	pieces: state.pieces
});

export default
@connect(
	mapStateToProps,
	{ getPieces }
)
class App extends Component {
	constructor(props) {
		super(props);

		this.props.getPieces();

		this.state = {
			openNav: false,
			scrollEnough: false
		}
	}

	componentDidMount(){
		console.log('shit');

    	window.addEventListener('scroll', this.handleScroll);
	}
	
	mobileNavToggle = this.mobileNavToggle.bind(this);
	handleScroll = this.handleScroll.bind(this);

	mobileNavToggle(){
		this.setState({
			openNav: !this.state.openNav
		})
	}

	handleScroll() {
		const {
			scrollEnough
		} = this.state;
		
		if(window.scrollY > 2000 && scrollEnough == false){
			this.setState({
				scrollEnough: true
			})
		}

		if(window.scrollY < 2000 && scrollEnough == true){
			this.setState({
				scrollEnough: false
			})
		}
	}

	render() {
		const {
			openNav,
			scrollEnough
		} = this.state;
		console.log('fuck');

		return <Router>
			<div>
				<Header mobileNavToggle={this.mobileNavToggle} openNav={openNav} />
				<Switch>
					<Route exact path="/" render={() => <Home pieces={this.props.pieces} />} />
					<Route exact path="/webography/" component={Webography} />
					<Route exact path="/videography/" render={Videography} />
					<Route exact path="/photography/" render={Photography} />
					<Route exact path="/contact/" component={Contact} />
					<Route render={(match) => {
						console.log(match);
						return <div>OOOppps</div>;
					}} />
				</Switch>
				<Footer />
				<ToTop scrollEnough={scrollEnough} />
			</div>
		</Router>;
	}
}