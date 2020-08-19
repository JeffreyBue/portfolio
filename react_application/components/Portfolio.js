import './Portfolio.less';

import React, { Component } from 'react';
import mixitup from 'mixitup';

import PieceWrap from 'components/PieceWrap';
import List from 'components/List';

export default class Portfolio extends Component {
  	state = {
		loading: false,
		active: null,
		category: this.props.categories ? this.props.categories[0] : 'all'
	}

	clickit = this.clickit.bind(this);
	closePiece = this.closePiece.bind(this);
	categoryClick = this.categoryClick.bind(this);


	componentDidMount(){
		const {
			category
		} = this.state,
		filteredCat = category == 'all' ? category : `.${category}`;
		mixitup('#projects').filter(filteredCat);
	}


	componentWillUnmount() {
  		mixitup('#projects').destroy();
  	}

	categoryClick(e){
		this.setState({
			category: e.currentTarget.textContent
		})
	}

	clickit(e) {
		const slug = $(e.currentTarget).data('slug');

		if($('#portfolio').length) {
			$('html, body').animate({
	        	scrollTop: $('#portfolio').offset().top + parseInt('-74')
	      	}, 700);
		}

		this.setState({
			loading: true
		})

		setTimeout(() => {
			this.setState({
				loading: false,
				active: slug
			})
		}, 1000)
	}

	closePiece(){
		if($('#work').length) {
			$('html, body').animate({
	        	scrollTop: $('#work').offset().top + parseInt('-74')
	      	}, 700);
		}

		this.setState({
			loading: true
		})	

		setTimeout(() => {
			this.setState({
				loading: false,	
				active: null
			})
		}, 2100)
	}

	render() {
		const {
			loading,
			active,
			category
		} = this.state

		let {
			categories
		} = this.props;

		if(!categories) categories = ['all'];

		return <section id="portfolio" ref={this.project} >
			<ul className="categories">
				{categories.map(cat => <li key={cat} onClick={this.categoryClick} className={`${category == cat ? ' active' : ''}`} data-filter={`${cat == 'all' ? 'all' : `.${cat}`}`}>{cat}</li>)}
			</ul>
			<PieceWrap loading={loading} active={active} closePiece={this.closePiece}/>
			<List category={category} clickit={this.clickit} />
		</section>
	}
}