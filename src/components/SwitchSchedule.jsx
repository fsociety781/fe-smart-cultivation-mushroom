import { useEffect, useId } from "react";
import PropTypes from "prop-types";

export default function SwitchSchedule({
  title,
  status,
  value,
  setStatus,
  setValue,
}) {
  const id = useId();

  useEffect(() => {}, [status, value]);

  return (
    <div className="card text-bg-light">
      {title && (
        <div className="card-header d-flex align-items-center justify-content-between">
          {title}{" "}
          <i
            title="Enable schedule mode to change the schedule"
            className="bi bi-info-circle-fill text-secondary"
          ></i>{" "}
        </div>
      )}
      <div className="card-body">
        <div
          className="btn-group w-100"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="radio-schedule"
            id={id + "s1"}
            value={"modeSchedule1"}
            autoComplete="off"
            onChange={setValue}
            checked={value === "modeSchedule1"}
            disabled={!status}
          />
          <label className="btn btn-outline-primary" htmlFor={id + "s1"}>
            <span className="d-none d-lg-inline">Schedule 1</span>
            <span className="d-inline d-lg-none">S1</span>
          </label>

          <input
            type="radio"
            className="btn-check"
            name="radio-schedule"
            id={id + "s2"}
            value={"modeSchedule2"}
            autoComplete="off"
            onChange={setValue}
            checked={value === "modeSchedule2"}
            disabled={!status}
          />
          <label className="btn btn-outline-primary" htmlFor={id + "s2"}>
            <span className="d-none d-lg-inline">Schedule 2</span>
            <span className="d-inline d-lg-none">S2</span>
          </label>

          <input
            type="checkbox"
            className="btn-check"
            id={id}
            autoComplete="off"
            checked={!!status}
            onChange={setStatus}
          />
          <label className="btn btn-primary" htmlFor={id}>
            {status ? (
              <span className="fw-semibold text-decoration-underline">ON</span>
            ) : (
              <span>OFF</span>
            )}
          </label>
        </div>
      </div>
    </div>
  );
}

SwitchSchedule.propTypes = {
  title: PropTypes.string,
  status: PropTypes.oneOf([
    "ON",
    "OFF",
    "On",
    "Off",
    "on",
    "off",
    true,
    false,
    1,
    0,
  ]).isRequired,
  value: PropTypes.oneOf(["modeSchedule1", "modeSchedule2"]).isRequired,
  setStatus: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
