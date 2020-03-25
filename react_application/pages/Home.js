import './Home.less';

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Home = () => {
	return <section>
		<div className="wrapper">
			<div className="search">
				<form id="search">
					<div className="for_input">
						<input name="fn" type="text" placeholder="First Name" tabindex="1" />
					</div>
					<div className="for_input">
						<input name="ln" type="text" placeholder="Last Name" tabindex="2" />
					</div>			
					<div className="for_input">
						<input name="city" type="text" placeholder="City" tabindex="3" />
					</div>	
					<div className="for_input">
						<select id="state" name="state" tabindex="4">
							<option>Yeppers</option>
						</select>
					</div>
					<div className="for_input">
						<input value="Search Now" type="submit" tabindex="4" />	
					</div>		
				</form>
			</div>
		</div>
	</section>;
};

export default Home;