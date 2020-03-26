import React, { Component } from 'react';


export default class Scroll extends Component {
	scrollIt = this.scrollIt.bind(this);

	scrollIt() {
		const {
			to,
			offset
		} = this.props;

		// GET VALUE OF OFFSET + OR - PX OR NOT

		if($(to).length) {
			$('html, body').animate({
	        	scrollTop: $(to).offset().top + 200
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