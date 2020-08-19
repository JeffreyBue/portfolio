import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';

import ReactApplication from '../../react_application';

ReactDOM.render(
	<ReactApplication />,
	document.getElementById('react_app')
);

$('a.scrollTo').click((e) => {
	const a = e.currentTarget;
	const to = $(a).data('to'); 
	const offset = $(a).data('offset');
	
	$('html, body').animate({
    	scrollTop: $(to).offset().top + parseInt(offset)
  	}, 700);
});

// scroll to top circle bend
const circleType = new CircleType($('#toTop .top')[0]);
circleType.radius(60).dir(1);