import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactApexChart from "react-apexcharts";
import * as Constans from "@/constants/index";
import { parseApexSeries, parseApexCategories } from "@/lib/apex-chart.lib";

export default function Chart({ title, items, color }) {
  const [apexSeries, setApexSeries] = useState(Constans.APEX_SERIES);
  const [apexOptions, setApexOptions] = useState(Constans.APEX_OPTIONS);

  function initData() {
    setApexSeries((prev) => {
      return {
        ...prev,
        title: title,
        data: parseApexSeries(items),
      };
    });

    setApexOptions((prev) => {
      const colors = Constans.APEX_COLORS_KEY.includes(color)
        ? [Constans.APEX_COLORS_VALUE[color]]
        : [];

      return {
        ...prev,
        colors,
        fill: { colors },
        xaxis: {
          categories: parseApexCategories(items),
        },
      };
    });
  }

  useEffect(() => {
    initData();
    // console.log("after parsing", apexSeries, apexOptions);

    return () => {
      // setApexSeries({ title: title, data: [] });
    };
  }, [items, color, title]);

  return (
    <div className="card text-bg-light">
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">
        <ReactApexChart
          options={apexOptions}
          series={[apexSeries]}
          type="area"
        />
      </div>
    </div>
  );
}

Chart.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      suhu: PropTypes.string,
      waktu: PropTypes.string,
    })
  ),
  color: PropTypes.oneOf(Constans.APEX_COLORS_KEY),
};
