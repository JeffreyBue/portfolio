import './Contact.less';

import React, { Component, Fragment } from 'react';
import { Parallax } from 'react-parallax';

export default class Contact extends Component {
	state = {
		noteText: '',
		emailSent: false,
		alert: false
	};

	updateText = this.updateText.bind(this);
	submitNote = this.submitNote.bind(this);

	updateText(e) {
		const text = e.target.value;
		this.setState({
			noteText: text,
			alert: false
		})
	}

	submitNote(){
		console.log(this.state.noteText, typeof this.state.noteText);
		if(this.state.noteText !== '') {
			console.log('sent');
			$.post('/api/email/', {note: this.state.noteText})
				.always(() => {
					this.setState({
						loading: false,
						emailSent: true
					});	
				});

			this.setState({
				loading: true,
				alert: false
			});
		}else {
			console.log('failed');
			this.setState({
				alert: true
			});
		}
	}

	render() {
		const {
			noteText,
			loading,
			emailSent,
			alert
		} = this.state,
		parallaxStyle = isMobile ? {height: "300px", top: "65px"} : {};

		return	<main id="contact">
			<Parallax
				bgImage="/images/pictures/contact.png"
				bgImageAlt="Contact"
				strength={-100}
				bgImageStyle={parallaxStyle}
			>
				<section id="hero-contact">
					<div className="wrapper">
						<div className="centerV">
							<h1>Contact</h1>
					 	</div>	
					 </div>
				</section>	
			</Parallax>
			<div id="contact_me">
				<h2>CONTACT</h2>
				<span className="spacer"></span>
				<h2>Welcome to My Contact Page!</h2>
				<p>
					I’m a web developer located in San Diego. I specialize in full stack development including HTML, CSS, Javascript, JQuery, AJAX, RethinkDB, MySql and PHP, ect. I have experience with Node.js, React, NGINX, Git Repositories, SLIM, and Laravel. I’m also skilled in WordPress, the Facebook API and SDK, Photoshop, Illustrator, After Effects, and Premiere Pro. I also have an amazing niche for solving problems and getting the job done.
				</p>
				<p>
					I’m a former Marine from Salt Lake City. I went to school both at the Art Institute in Seattle where I recieved an Associates in Video Production and Platt College where I attained my Bachelors in Web Design. I live life with an open mind. I’m always hoping for the best, at the same time staying grounded and practical. Always looking to better myself at the same time trying to better the world.
				</p>
				<section className={`${loading ? "loading": ""}${emailSent ? "sent": ""}`}>
					{!emailSent ? <span>
						<p className={`${alert ? "alert": ""}`}>
							Send Note To Jeff:
						</p>
						<textarea className={`${alert ? "alert": ""}${emailSent ? " sent": ""}`} onChange={this.updateText} placeholder="....send me a note."></textarea>
						<button onClick={this.submitNote}>Send It.</button>
					</span> : <p>Thank You Message Sent!</p>}
				</section>
			</div>
		</main>;
	}
}