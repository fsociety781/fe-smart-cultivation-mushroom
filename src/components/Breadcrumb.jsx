import PropTypes from "prop-types";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items?.map((item, index) => {
          return (
            <li key={index} className={"breadcrumb-item"}>
              {!item.active && <i className="bi bi-house"></i>}
              {" "}{item.name}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ),
};
