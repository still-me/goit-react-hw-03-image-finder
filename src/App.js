import React, { Component } from "react";
import "./App.scss";
import fetchImagesApi from "./services/image-finder-api";
import Loader from "./components/Loader";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    images: [],
    largeImage: {
      src: "",
      alt: "",
    },
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    if (this.state.images.length > 14) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    fetchImagesApi(options)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onChangeQuery = (query) => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
      error: null,
    });
  };

  onImageClick = (e) => {
    const src = e.target.src;
    const alt = e.target.alt;

    if (e.target === e.currentTarget) {
      return;
    }
    this.setState({ largeImage: { src, alt } });
  };

  onCloseModal = () => {
    this.setState({
      largeImage: {
        src: "",
        alt: "",
      },
    });
  };

  render() {
    const { isLoading, images, largeImage, error } = this.state;
    const ShouldButtonBeVisible = images.length > 0 && !isLoading;

    return (
      <div className="App">
        {isLoading && <Loader />}

        <Searchbar onSubmit={this.onChangeQuery} />

        {error && (
          <h1>
            К сожалению, при загрузке возникла следующая ошибка:
            <span style={{ color: "red" }}> {error}</span>
          </h1>
        )}

        <ImageGallery images={images} onImageClick={this.onImageClick} />

        {ShouldButtonBeVisible && <Button onClick={this.fetchImages} />}

        {largeImage.src !== "" && (
          <Modal
            src={largeImage.src}
            alt={largeImage.alt}
            onClose={this.onCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
