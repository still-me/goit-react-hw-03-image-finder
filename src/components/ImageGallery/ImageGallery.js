import PropTypes from "prop-types";

import "./ImageGallery.scss";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="ImageGallery" onClick={onImageClick}>
    {images.map(({ webformatURL, tags, id }) => (
      <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
