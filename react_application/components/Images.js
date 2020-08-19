import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { getImages } from 'rootDuck';

const mapStateToProps = state => ({
    imageSet: state.images
});

export default
@connect(
    mapStateToProps,
    { getImages }
)
class Images extends Component {
    componentDidMount(a, b) {
        this.props.getImages();
    }

    state = {
    	viewerIsOpen: false,
    	currentImage: 0
    }

    closeLightbox = this.closeLightbox.bind(this);

    openLightbox = this.openLightbox.bind(this);

    openLightbox(event, image) {
    	this.setState({
	    	viewerIsOpen: true,
	    	currentImage: image.index
    	});
    }

    closeLightbox() {
    	this.setState({
	    	viewerIsOpen: false,
	    	currentImage: ''
    	});
    }


    render() {
    	const {
    		currentImage,
    		viewerIsOpen
    	} = this.state;

        const {
            imageSet
        } = this.props;

     	return <div>
      		<Gallery photos={imageSet} onClick={this.openLightbox} className="photo_gallery"/>
      		<ModalGateway>
      			{viewerIsOpen ? (
      				<Modal onClose={this.closeLightbox}>
      					<Carousel
      						currentIndex={currentImage}
      						views={imageSet.map(x => {
      							return ({
      							...x,
      							srcset: x.srcSet,
      							caption: x.title
      							})
      						})}
      					/>
      				</Modal>
      			) : null}
      		</ModalGateway>
    	</div>;
    }
}