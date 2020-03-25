import './Header.less';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => <header>
	<div className="wrapper">
		<h1>Jeffrey J. Bue</h1>
		<ul>
			<li>
				<Link to="/">
					Home
				</Link>
			</li>
			<li>
				<Link to="/webography/">
					Webography
				</Link>
			</li>
			<li>
				<Link to="/photography/">
					Photography
				</Link>
			</li>
			<li>
				<Link to="/videography/">
					Videography
				</Link>
			</li>
			<li>
				<Link to="/contact/">
					Contact
				</Link>
			</li>
		</ul>
	</div>
</header>;


export default Header;