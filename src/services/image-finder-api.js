import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "21079808-fc3c19baaaeb0df1cf39adfe9";

const fetchImagesApi = ({ searchQuery = "", currentPage = 1 }) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(({ data }) => data.hits);
};

export default fetchImagesApi;
