import './Home.less';

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Gallery from 'components/Gallery';

import Hero from 'build/Hero';
import About from 'build/About';
import Work from 'build/Work';

const Home = ({pieces}) => {
	return <main id="home">
		<Hero />
		<Work pieces={pieces} />
		<About />
	</main>;
};

export default Home;