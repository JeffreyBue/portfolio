import React, { Component } from 'react';


export default class Scroll extends Component {
	scrollIt = this.scrollIt.bind(this);

	scrollIt() {
		const {
			to,
			offset
		} = this.props;

		// GET VALUE OF OFFSET + OR - PX OR NOT
		// isNegitive = offset.substr(0, 1) == '-';
		
		if($(to).length) {
			$('html, body').animate({
	        	scrollTop: $(to).offset().top + parseInt(offset)
	      	}, 700);
		}else {
			return false;
		}	
	}

	render() {
		const {
			children
		} = this.props;

		const childrenWithExtraProp = React.Children.map(children, child => {
      		return React.cloneElement(child, {
        		onClick: this.scrollIt
      		});
    	});

		return childrenWithExtraProp;
	}
}