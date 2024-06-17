import { useEffect } from "react";
import PropTypes from "prop-types";

export default function IndicatorStatus({ title, value }) {
  useEffect(() => {
    console.log(`${title}: ${value}`);
  }, [title, value]);

  return (
    <div className="card text-bg-light">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="d-flex align-items-center gap-2">
          {value ? (
            <i className="bi bi-circle-fill h2 text-success m-0"></i>
          ) : (
            <i className="bi bi-slash-circle h2 text-danger m-0"></i>
          )}
          <p className="m-0">
            Indicator is{" "}
            {value ? (
              <span className="fw-bold text-decoration-underline">on</span>
            ) : (
              <span className="fw-medium">off</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

IndicatorStatus.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOf([1, 0, true, false]).isRequired,
};
