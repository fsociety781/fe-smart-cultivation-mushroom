import { useId } from "react";
import PropTypes from "prop-types";

export default function SwitchMode({ title, value, setValue }) {
  const id = useId();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="card text-bg-light">
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">
        <div
          className="btn-group w-100 rounded-3"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="radio-mode"
            id={id + "h"}
            value={"hybrid"}
            autoComplete="off"
            onChange={handleChange}
            checked={value === "hybrid"}
          />
          <label className="btn btn-outline-primary" htmlFor={id + "h"}>
            Hybrid
          </label>

          <input
            type="radio"
            className="btn-check"
            name="radio-mode"
            id={id + "a"}
            value={"auto"}
            autoComplete="off"
            onChange={handleChange}
            checked={value === "auto"}
          />
          <label className="btn btn-outline-primary" htmlFor={id + "a"}>
            Auto
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id={id + "m"}
            value={"manual"}
            autoComplete="off"
            onChange={handleChange}
            checked={value === "manual"}
          />
          <label className="btn btn-outline-primary" htmlFor={id + "m"}>
            Manual
          </label>
        </div>
      </div>
    </div>
  );
}

SwitchMode.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOf(["hybrid", "auto", "manual"]).isRequired,
  setValue: PropTypes.func.isRequired,
};
