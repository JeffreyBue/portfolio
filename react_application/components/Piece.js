import './Piece.less';

import React from 'react';
import Gallery from 'components/Gallery';

export { config as buebeer } from 'portfolio/buebeer';
export { config as instantcheckmate } from 'portfolio/instantcheckmate';
export { config as admiralpub } from 'portfolio/admiralpub';
export { config as spiritualdirt } from 'portfolio/spiritualdirt';
export { config as digitaltipmarketing } from 'portfolio/digitaltipmarketing';
export { config as blowpop } from 'portfolio/blowpop';
export { config as rabbitholetechnologies } from 'portfolio/rabbitholetechnologies';
export { config as truthfinder } from 'portfolio/truthfinder';
export { config as nightifell } from 'portfolio/nightifell';
export { config as nrnr } from 'portfolio/nrnr';
export { config as scrapit } from 'portfolio/scrapit';
export { config as rht } from 'portfolio/rht';
export { config as madison } from 'portfolio/madison';
export { config as dulces } from 'portfolio/dulces';
export { config as cibaderm } from 'portfolio/cibaderm';
export { config as cibdex } from 'portfolio/cibdex';

const Piece = ( {config} ) => <div className="piece-individual">
	<Gallery slug={config.slug} images={config.images} />
	<div className="piece-content">
		<span className="spacer"></span>
		<h2>{config.title}</h2>
		<span>{config.category}</span>
		{(config.content)()}
	</div>
</div>;

export default Piece;