import "./Loader.scss";
import Loader from "react-loader-spinner";

const reactLoader = () => (
  <div className="Loader">
    <Loader type="BallTriangle" color="#f05d00" height={100} width={100} />
  </div>
);

export default reactLoader;
