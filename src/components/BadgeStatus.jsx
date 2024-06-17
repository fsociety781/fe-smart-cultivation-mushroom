import PropTypes from "prop-types";

export default function BadgeStatus({ text, className }) {
  return (
    <span className={`badge text-bg-${className ?? "secondary"}`}>{text}</span>
  );
}

BadgeStatus.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
