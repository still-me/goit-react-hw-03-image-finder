import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({ onClick }) => (
  <button className="Button" onClick={onClick}>
    load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
