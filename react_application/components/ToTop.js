import './ToTop.less'

import React, { Component } from 'react';
import * as Fa from 'react-icons/fa';
 
import Scroll from 'components/Scroll';

const ToTop = ({scrollEnough}) => <Scroll to="#react_app" offset="0">
	<div id="toTop" className={`${scrollEnough ? 'show' : ''}`}>
		<div className="top">Click Here To Scroll To Top</div>
		<Fa.FaArrowUp />
	</div>
</Scroll>

export default ToTop;