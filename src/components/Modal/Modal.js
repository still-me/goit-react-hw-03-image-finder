import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import defaultImage from "../../images/default.jpeg";

import "./Modal.scss";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.onEscapeKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscapeKeydown);
  }

  onEscapeKeydown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  onBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { src, alt } = this.props;

    return createPortal(
      <div className="Overlay" onClick={this.onBackdropClick}>
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.defaultProps = {
  src: defaultImage,
  alt: "unfortunately image was loaded with error",
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Modal;
