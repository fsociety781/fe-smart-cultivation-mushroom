import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/icons/react.svg";
import Constants from "../routes/constants";

export default function sidebar() {
  return (
    <div className="d-none d-md-block text-bg-dark vh-100 position-sticky top-0">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark h-100"
        style={{ width: "280px" }}
      >
        <Link
          className="navbar-brand d-inline-flex justify-content-start align-items-center flex-row gap-2"
          to={Constants.INDEX}
        >
          <img
            src={Logo}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          SCM
        </Link>
        <hr />
        <nav className="nav nav-pills flex-column mb-auto gap-2">
          <NavLink
            to={Constants.DASHBOARD}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "btn btn-dark text-start";
            }}
          >
            Dashboard
          </NavLink>

          <NavLink
            to={Constants.SETPOINT}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "btn btn-dark text-start";
            }}
          >
            Setpoint
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
