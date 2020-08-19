import './List.less';

import React from 'react';

import Piece, * as PP from 'components/Piece';

const List = ({category, clickit}) => <ul id="projects">
	{Object.keys(PP).map(p => {
		if(p != "default") {
			return <li className={`mix ${PP[p].category}`} data-slug={PP[p].slug} key={PP[p].slug} onClick={clickit}>
				<img src={PP[p].images[0].original} />
				<h3>
					{PP[p].title}
					<br/>
					<span>{PP[p].category}</span>
				</h3>
			</li>;
		}
	})}
</ul>

export default List;