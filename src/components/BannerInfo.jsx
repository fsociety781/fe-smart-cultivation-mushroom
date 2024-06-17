import PropTypes from "prop-types";
import { parseValueBanner } from "@/lib/banner-info";

export default function BannerInfo({ title, background, value, unit, icon }) {
  return (
    <div className={`card text-bg-${background} h-100`}>
      {/* <div className="card-header">Header</div> */}
      <div className="card-body d-flex align-items-center justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="h1 card-text">
            {parseValueBanner(value)}
            {unit}
          </p>
        </div>
        <div>
          <i className={"bi display-3 " + icon}></i>
        </div>
      </div>
    </div>
  );
}

BannerInfo.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string,
  icon: PropTypes.string.isRequired,
  background: PropTypes.string,
};
