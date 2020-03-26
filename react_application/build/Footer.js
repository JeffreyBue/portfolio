import './Footer.less';

import React from 'react';

const Footer = () => <footer id="footer">
	<div className="wrapper">
		<ul className="contact">
			<li>
				<i className="fas fa-phone-alt"></i>
				<br/>
				801.918.8523			
			</li>
			<li>
				<i className="fas fa-envelope"></i>
				<br/>
				bue@jeffreybue.com
			</li>
			<li>
				<i className="fas fa-map-marker-alt"></i>
				<br/>
				San Diego California
			</li>
		</ul>
	</div>

	<div className="wrapper contact-form">
		<h3>Get in touch</h3>

		<form action="#" method="post" id="contactform">
			<fieldset>
				<div>
					<label htmlFor="name">Name</label>
					<span>
						<input type="text" name="name" id="name" data-fieldid="0" />
					</span>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<span>
						<input type="email" name="email" id="email" data-fieldid="1" />
					</span>
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<span>
						<textarea name="message" id="message" data-fieldid="2"></textarea>
					</span>
				</div>
			</fieldset>
			<div>
				<span>
					<button name="send" type="submit" id="submit">
						Send
					</button>
				</span>
			</div>
			<div id="contactFormSent">
				<strong>
					Yay!
				</strong>
				Message sent.
			</div>
			<div id="contactFormError">
				<strong>
					Error!
				</strong>
				Please validate your fields.
			</div>
		</form>	
	</div>

	<div className="wrapper">
		<ul className="social-links">
			<li>
				<a href="https://www.facebook.com/jeffreyjbue" target="_blank" title="Facebook">
					<span className="icon-circle large">
						<i className="fab fa-facebook"></i>
					</span>
				</a>
			</li>
			<li>
				<a href="https://twitter.com/JeffBue" target="_blank" title="Twitter">
					<span className="icon-circle large">
						<i className="fab fa-twitter"></i>
					</span>
				</a>
			</li>
			<li>
				<a href="https://www.youtube.com/user/Buebeer" target="_blank" title="YouTube">
					<span className="icon-circle large">
						<i className="fab fa-youtube"></i>
					</span>
				</a>
			</li>
			<li>
				<a href="http://instagram.com/jeffbue" target="_blank" title="Instagram">
					<span className="icon-circle large">
						<i className="fab fa-instagram"></i>
					</span>
				</a>
			</li>
			<li>
				<a href="http://www.linkedin.com/pub/jeffrey-bue/46/952/7a3" target="_blank" title="LinkedIn">
					<span className="icon-circle large">
						<i className="fab fa-linkedin"></i>
					</span>
				</a>
			</li>		
		</ul>

	</div>
	<div className="copy">
		<div className="wrapper">
			©{(new Date().getFullYear())} JeffreyBue.com. All Rights Reserved.
		</div>
	</div>
</footer>;


export default Footer;