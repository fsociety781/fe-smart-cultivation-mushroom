import { useEffect, useId } from "react";
import PropTypes from "prop-types";
import "@/assets/styles/switch-control.css";

export default function SwitchControl({ title, status, setStatus }) {
  const id = useId();

  const handleChange = () => {
    setStatus();
  };

  useEffect(() => {}, [status]);

  return (
    <div className="card text-bg-light">
      {title && (
        <div className="card-header">
          {title}
        </div>
      )}
      <div className="card-body">
        <div className="form-switch-container">
          <label
            className={`form-check-label ${!status && "active"}`}
            htmlFor={id + "-" + title}
          >
            OFF
          </label>
          <div className="form-check form-switch form-switch-lg mx-1">
            <input
              className="form-check-input"
              type="checkbox"
              id={id + "-" + title}
              title={title}
              checked={!!status}
              onChange={handleChange}
            />
          </div>
          <label
            className={`form-check-label ${status && "active"}`}
            htmlFor={id + "-" + title}
          >
            ON
          </label>
        </div>
      </div>
    </div>
  );
}

SwitchControl.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  setStatus: PropTypes.func,
};
