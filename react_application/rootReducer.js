/**
 * Top-level Application reducer
 */
import { combineReducers } from 'redux';
import { piecesRed as pieces, imagesRed as images } from './rootDuck';

export default combineReducers({
	pieces,
	images
});
