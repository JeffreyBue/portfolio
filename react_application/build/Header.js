import './Header.less';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ mobileNavToggle, openNav }) => <header>
	<div className="wrapper">
		<h1><img src="/images/logo11.png" alt="JJB" />Jeffrey J. Bue</h1>
		<div className={`hamburger${openNav ? ' active' : ''}`} onClick={mobileNavToggle}>
            <span></span>
            <span></span>
            <span></span>
		</div>
		<ul className={`${openNav ? ' active' : ''}`} onClick={mobileNavToggle}>
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