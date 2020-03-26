import './Home.less';

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Hero from 'build/Hero';
import About from 'build/About';

const Home = () => {
	return <main id="home">
		<Hero />
		<div style={{height: '1400px'}}>hi</div>
		<About />
		<div style={{height: '1400px'}}>hi</div>
	</main>;
};

export default Home;