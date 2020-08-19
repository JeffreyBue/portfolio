
/**
 * Actions
 */
const 	PIECES = 'PIECES';
const 	IMAGES = 'IMAGES';

/**
 * Reducers
 */
export function piecesRed(state = [], action = {}) {
	switch (action.type) {
		case PIECES:
			return action.files;
		default:
			return state;
	}
}

export function imagesRed(state = [], action = {}) {
	switch (action.type) {
		case IMAGES:
			return action.files;
		default:
			return state;
	}
}

/**
 * Action creators
 */
export function pieces(files) {
	return {
		type: PIECES,
		files
	};
}

export function images(files) {
	return {
		type: IMAGES,
		files
	};
}


/**
 * API functions
 */
export function getPieces() {
	return (dispatch) => {
		$.get('/api/').then(response => {
			dispatch(pieces(response));
		}).fail(response => {
			console.log(response);
			// location.reload();
		});
	};
}

export function getImages() {
	return (dispatch) => {
		$.get('/api/getimages/').then(response => {
			dispatch(images(response));
		}).fail(response => {
			console.log(response);
		});
	};
}