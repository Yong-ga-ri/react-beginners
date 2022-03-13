import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
	return <button className={styles.title}>{text}</button>;
}

Button.propType = {
	text: PropTypes.string.isRequired,
};

export default Button;