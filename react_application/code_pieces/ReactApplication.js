import React from 'react';

import Highlight from 'react-highlight';
import JSONPretty from 'react-json-pretty';
import * as Fa from 'react-icons/fa';
import * as Di from 'react-icons/di';

import Tab from 'components/Tab';
import Scroll from 'components/Scroll';

const ReactApplication = () => <div id="reactapplication" className="highlight-section">
			<h3>React Application</h3>
			<p className="description">
				I'm not going to show every single thing with this app, but basically it's a react application with a redux store tooled by webpack.
				<br/> below are some cool tips and tricks that I thought should of been pointed out.
			</p>
			<pre>
				<code class="plaintext hljs">
					<p>
						-- <Fa.FaFolder className="align" /> react_application
					</p>
					<p>
						---- <Fa.FaFolder className="align" /> build (This folder contains the structure of the DOM, like Header.js, Footer.js, and sections within the pages.)
					</p>
					<p>
						---- <Fa.FaFolder className="align" /> <Scroll to="#r_components" offset="-94">
							<a>
								components
							</a>
						</Scroll>
					</p>
					<p>
						---- <Fa.FaFolder className="align" /> code_pieces (This folder actually contains all these sections on this page. It's comprised of about 50 different components.)
					</p>
					<p>
						---- <Fa.FaFolder className="align" /> pages (Containing the root 5 pages for this site, Home, Webography, Videography, Photography, and Contact.)
					</p>
					<p>
						---- <Fa.FaFolder className="align" /> portfolio
					</p>
					<p>
						---- <Di.DiJavascript1 className="align" /> App.js
					</p>
					<p>
						---- <Di.DiJavascript1 className="align" /> index.js
					</p>
					<p>
						---- <Di.DiJavascript1 className="align" /> rootDuck.js
					</p>
					<p>
						---- <Di.DiJavascript1 className="align" /> rootReducer.js
					</p>
				</code>
			</pre>
			<h3 id="r_components" >
				Components
			</h3>
			<div>
				<Scroll to="#component_scroll" offset="-94"><a>---Scroll.js</a></Scroll>
				<Scroll to="#component_portfolio" offset="-94"><a>---Portfolio.js</a></Scroll>
				<Scroll to="#component_piecewrap" offset="-94"><a>---PieceWrap.js</a></Scroll>
				<Scroll to="#component_list" offset="-94"><a>---List.js</a></Scroll>
				<Scroll to="#component_piece" offset="-94"><a>---Piece.js</a></Scroll>
			</div>
			<p className="description">
				Below are some custom components and a list of components I've used to create this app.
			</p>
			<h4 id="component_scroll">Scroll.js<Scroll to="#r_components" offset="-94"><i>^</i></Scroll></h4>
			<p className="description">
				A custom component I created to help with smooth scrolling
			</p>
			<Highlight className="javascript">
				{"export default class Scroll extends Component {"}
				<br/><Tab/>{"	scrollIt = this.scrollIt.bind(this);"}
				<br/><Tab/>{""}
				<br/><Tab/>{"	scrollIt() {"}
				<br/><Tab/>{"		const {"}
				<br/><Tab/>{"			to,"}
				<br/><Tab/>{"			offset"}
				<br/><Tab/>{"		} = this.props;"}
				<br/><Tab/>{""}
				<br/><Tab/>{"		"}
				<br/><Tab/>{"		if($(to).length) {"}
				<br/><Tab/>{"			$('html, body').animate({"}
				<br/><Tab/>{"	        	scrollTop: $(to).offset().top + parseInt(offset)"}
				<br/><Tab/>{"	      	}, 700);"}
				<br/><Tab/>{"		}else {"}
				<br/><Tab/>{"			return false;"}
				<br/><Tab/>{"		}	"}
				<br/><Tab/>{"	}"}
				<br/><Tab/>{""}
				<br/><Tab/>{"	render() {"}
				<br/><Tab/>{"		const {"}
				<br/><Tab/>{"			children"}
				<br/><Tab/>{"		} = this.props;"}
				<br/><Tab/>{""}
				<br/><Tab/>{"		const childrenWithExtraProp = React.Children.map(children, child => {"}
				<br/><Tab/>{"      		return React.cloneElement(child, {"}
				<br/><Tab/>{"        		onClick: this.scrollIt"}
				<br/><Tab/>{"      		});"}
				<br/><Tab/>{"    	});"}
				<br/><Tab/>{""}
				<br/><Tab/>{"		return childrenWithExtraProp;"}
				<br/><Tab/>{"	}"}
				<br/><Tab/>{"}"}
			</Highlight>
			<h4 id="component_portfolio">Portfolio.js<Scroll to="#r_components" offset="-94"><i>^</i></Scroll></h4>
			<p className="description">
				This custom component is designed to show all the content of the portfolio piece, including pictures and description of the piece of work. 
				<br/>It's the main feature on the home, web, and video pages.
				<br/>With the help from npm package "mixitup", it provides for a stunning smooth functional interact that is easy on the eyes. 
				<br/>
				Fun fact it took me many hours to figure out that I needed to destroy the mixitup instance on unmount when going from one page to the next, otherwise it wouldn't work, lol.
			</p>
			<Highlight className="javascript">
				<br/>{"import './Portfolio.less';"}
				<br/>{""}
				<br/>{"import React, { Component } from 'react';"}
				<br/>{"import mixitup from 'mixitup';"}
				<br/>{""}
				<br/>{"import PieceWrap from 'components/PieceWrap';"}
				<br/>{"import List from 'components/List';"}
				<br/>{""}
				<br/>{"export default class Portfolio extends Component {"}
				<br/>{"  	state = {"}
				<br/>{"		loading: false,"}
				<br/>{"		active: null,"}
				<br/>{"		category: this.props.categories ? this.props.categories[0] : 'all'"}
				<br/>{"	}"}
				<br/>{""}
				<br/>{"	clickit = this.clickit.bind(this);"}
				<br/>{"	closePiece = this.closePiece.bind(this);"}
				<br/>{"	categoryClick = this.categoryClick.bind(this);"}
				<br/>{""}
				<br/>{""}
				<br/>{"	componentDidMount(){"}
				<br/>{"		const {"}
				<br/>{"			category"}
				<br/>{"		} = this.state,"}
				<br/>{"		filteredCat = category == 'all' ? category : `.${category}`;"}
				<br/>{"		mixitup('#projects').filter(filteredCat);"}
				<br/>{"	}"}
				<br/>{""}
				<br/>{""}
				<br/>{"	componentWillUnmount() {"}
				<br/>{"  		mixitup('#projects').destroy();"}
				<br/>{"  	}"}
				<br/>{""}
				<br/>{"	categoryClick(e){"}
				<br/>{"		this.setState({"}
				<br/>{"			category: e.currentTarget.textContent"}
				<br/>{"		})"}
				<br/>{"	}"}
				<br/>{""}
				<br/>{"	clickit(e) {"}
				<br/>{"		const slug = $(e.currentTarget).data('slug');"}
				<br/>{""}
				<br/>{"		if($('#portfolio').length) {"}
				<br/>{"			$('html, body').animate({"}
				<br/>{"	        	scrollTop: $('#portfolio').offset().top + parseInt('-74')"}
				<br/>{"	      	}, 700);"}
				<br/>{"		}"}
				<br/>{""}
				<br/>{"		this.setState({"}
				<br/>{"			loading: true"}
				<br/>{"		})"}
				<br/>{""}
				<br/>{"		setTimeout(() => {"}
				<br/>{"			this.setState({"}
				<br/>{"				loading: false,"}
				<br/>{"				active: slug"}
				<br/>{"			})"}
				<br/>{"		}, 1000)"}
				<br/>{"	}"}
				<br/>{""}
				<br/>{"	closePiece(){"}
				<br/>{"		if($('#work').length) {"}
				<br/>{"			$('html, body').animate({"}
				<br/>{"	        	scrollTop: $('#work').offset().top + parseInt('-74')"}
				<br/>{"	      	}, 700);"}
				<br/>{"		}"}
				<br/>{""}
				<br/>{"		this.setState({"}
				<br/>{"			loading: true"}
				<br/>{"		})	"}
				<br/>{""}
				<br/>{"		setTimeout(() => {"}
				<br/>{"			this.setState({"}
				<br/>{"				loading: false,	"}
				<br/>{"				active: null"}
				<br/>{"			})"}
				<br/>{"		}, 2100)"}
				<br/>{"	}"}
				<br/>{""}
				<br/>{"	render() {"}
				<br/>{"		const {"}
				<br/>{"			loading,"}
				<br/>{"			active,"}
				<br/>{"			category"}
				<br/>{"		} = this.state"}
				<br/>{""}
				<br/>{"		let {"}
				<br/>{"			categories"}
				<br/>{"		} = this.props;"}
				<br/>{""}
				<br/>{"		if(!categories) categories = ['all'];"}
				<br/>{""}
				<br/>{"		return <section id=\"portfolio\" ref={this.project} >"}
				<br/>{"			<ul className=\"categories\">"}
				<br/>{"				{categories.map(cat => <li key={cat} onClick={this.categoryClick} className={`${category == cat ? ' active' : ''}`} data-filter={`${cat == 'all' ? 'all' : `.${cat}`}`}>{cat}</li>)}"}
				<br/>{"			</ul>"}
				<br/>{"			<PieceWrap loading={loading} active={active} closePiece={this.closePiece}/>"}
				<br/>{"			<List category={category} clickit={this.clickit} />"}
				<br/>{"		</section>"}
				<br/>{"	}"}
				<br/>{"}"}
			</Highlight>
			<h4 id="component_piecewrap">PieceWrap.js<Scroll to="#r_components" offset="-94"><i>^</i></Scroll></h4>
			<p className="description">
				This is the containing div for each indivdual portfolio piece.
			</p>
			<Highlight className="javascript">
				{'import \'./PieceWrap.less\';'}
				<br/>{''}
				<br/>{'import React, { Component } from \'react\';'}
				<br/>{''}
				<br/>{'import Piece, * as PP from \'components/Piece\';'}
				<br/>{''}
				<br/>{'const PieceWrap = ({loading, active, closePiece}) => <div 				className={`piece-wrap${loading ? \'<br/>loading\' : \'\'}${active ? \' active\' : \'\'}${(loading && active) ? \' close\': \'\'}\'}>'}
				<br/>{'	{(loading && !active) && <span className="loading"></span>}'}
				<br/>{'	{active && <section className="piece">'}
				<br/>{'		<Piece config={PP[active]} />'}
				<br/>{'		<div className="close-piece">'}
				<br/>{'			<span className="spacer"></span>'}
				<br/>{'			<button onClick={closePiece}>X</button>'}
				<br/>{'		</div>'}
				<br/>{'	</section>}'}
				<br/>{'</div>'}
				<br/>{''}
				<br/>{'export default PieceWrap;'}
			</Highlight>
			<h4 id="component_list">List.js<Scroll to="#r_components" offset="-94"><i>^</i></Scroll></h4>
			<p className="description">
				This custom component layout the porfolio pieces for you to see on each of the pages.
			</p>
			<Highlight className="javascript">
				{"import './List.less';"}
				<br/>{""}
				<br/>{"import React from 'react';"}
				<br/>{""}
				<br/>{"import Piece, * as PP from 'components/Piece';"}
				<br/>{""}
				<br/>{"const List = ({category, clickit}) => <ul id=\"projects\">"}
				<br/>{"	{Object.keys(PP).map(p => {"}
				<br/>{"		if(p != \"default\") {"}
				<br/>{"			return <li className={`mix ${PP[p].category}`} data-slug={PP[p].slug} key={PP[p].slug} onClick={clickit}>"}
				<br/>{"				<img src={PP[p].images[0].original} />"}
				<br/>{"				<h3>"}
				<br/>{"					{PP[p].title}"}
				<br/>{"					<br/>"}
				<br/>{"					<span>{PP[p].category}</span>"}
				<br/>{"				</h3>"}
				<br/>{"			</li>;"}
				<br/>{"		}"}
				<br/>{"	})}"}
				<br/>{"</ul>"}
				<br/>{""}
				<br/>{"export default List;"}
			</Highlight>
			<h4 id="component_piece">Piece.js<Scroll to="#r_components" offset="-94"><i>^</i></Scroll></h4>
			<p className="description">
				This is a very important "Piece", lol. it imports from List.js all the exported configs from the portfolio directory, which has all the portfolio pieces.
			</p>
			<Highlight className="javascript">
				<br/>{"import './Piece.less';"}
				<br/>{""}
				<br/>{"import React from 'react';"}
				<br/>{"import Gallery from 'components/Gallery';"}
				<br/>{""}
				<br/>{"export { config as buebeer } from 'portfolio/buebeer';"}
				<br/>{"export { config as instantcheckmate } from 'portfolio/instantcheckmate';"}
				<br/>{"export { config as admiralpub } from 'portfolio/admiralpub';"}
				<br/>{"export { config as spiritualdirt } from 'portfolio/spiritualdirt';"}
				<br/>{"export { config as digitaltipmarketing } from 'portfolio/digitaltipmarketing';"}
				<br/>{"export { config as blowpop } from 'portfolio/blowpop';"}
				<br/>{"export { config as rabbitholetechnologies } from 'portfolio/rabbitholetechnologies';"}
				<br/>{"export { config as truthfinder } from 'portfolio/truthfinder';"}
				<br/>{"export { config as nightifell } from 'portfolio/nightifell';"}
				<br/>{"export { config as nrnr } from 'portfolio/nrnr';"}
				<br/>{"export { config as scrapit } from 'portfolio/scrapit';"}
				<br/>{"export { config as rht } from 'portfolio/rht';"}
				<br/>{"export { config as madison } from 'portfolio/madison';"}
				<br/>{"export { config as dulces } from 'portfolio/dulces';"}
				<br/>{"export { config as cibaderm } from 'portfolio/cibaderm';"}
				<br/>{"export { config as cibdex } from 'portfolio/cibdex';"}
				<br/>{""}
				<br/>{"const Piece = ( {config} ) => <div className=\"piece-individual\">"}
				<br/>{"	<Gallery slug={config.slug} images={config.images} />"}
				<br/>{"	<div className=\"piece-content\">"}
				<br/>{"		<span className=\"spacer\"></span>"}
				<br/>{"		<h2>{config.title}</h2>"}
				<br/>{"		<span>{config.category}</span>"}
				<br/>{"		{(config.content)()}"}
				<br/>{"	</div>"}
				<br/>{"</div>;"}
				<br/>{""}
				<br/>{"export default Piece;"}
			</Highlight>
		</div>;

export default ReactApplication;