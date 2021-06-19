import PropTypes from "prop-types";

import "./ImageGalleryItem..scss";
import defaultImage from "../../images/default.jpeg";

const ImageGalleryItem = ({ src, alt }) => (
  <li className="ImageGalleryItem">
    <img src={src} alt={alt} className="ImageGalleryItem-image" />
  </li>
);

ImageGalleryItem.defaultProps = {
  src: defaultImage,
  alt: "unfortunately image was loaded with error",
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
