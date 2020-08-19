import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.less'

import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
 
const Gallery = ({slug, images}) => <ImageGallery items={images} additionalClass={slug} showBullets showThumbnails={false} showFullscreenButton={false} showPlayButton={false} />;

export default Gallery;