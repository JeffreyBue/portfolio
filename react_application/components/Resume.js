import './Resume.less'

import React from 'react';
 
const Resume = () => {

	function asdf(){
		console.log('asdf');
		$('#pdf').animate({right: '-200px'}, 500, () => {
			$('#pdf').remove();
		});
	}

	return <div id="pdf">
		<a href="https://drive.google.com/file/d/1LxQo9eBR3d4Aq7_Ypo_UgTDhI6G-IvYa/view?usp=sharing" target="_blank"></a>
		<span id="close-pdf" onClick={asdf}>
			X
		</span>
		<p>
			RESUME
		</p>
	</div>
}

export default Resume;