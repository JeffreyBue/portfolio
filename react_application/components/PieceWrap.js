import './PieceWrap.less';

import React, { Component } from 'react';

import Piece, * as PP from 'components/Piece';

const PieceWrap = ({loading, active, closePiece}) => <div className={`piece-wrap${loading ? ' loading' : ''}${active ? ' active' : ''}${(loading && active) ? ' close': ''}`}>
	{(loading && !active) && <span className="loading"></span>}
	{active && <section className="piece">
		<Piece config={PP[active]} />
		<div className="close-piece">
			<span className="spacer"></span>
			<button onClick={closePiece}>X</button>
		</div>
	</section>}
</div>

export default PieceWrap;