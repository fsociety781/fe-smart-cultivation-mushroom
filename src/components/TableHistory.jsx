import { useEffect } from "react";
import PropTypes from "prop-types";
import * as Constans from "@/constants";
import {
  parseDate,
  parseStatusBadge,
  parseTime,
} from "@/lib/table-history.lib";
import BadgeStatus from "./BadgeStatus";

export default function TableHistory({ title, data }) {
  useEffect(() => {}, [data]);

  return (
    <div className="card text-bg-light">
      {title && <div className="card-header">{title}</div>}
      <div className="card-body d-flex align-items-center justify-content-between">
        <div
          className="w-100 h-100 overflow-auto"
          style={{ maxHeight: "71vh" }}
        >
          <table className="table table-light table-hover table-responsive">
            <thead>
              <tr>
                <th scope="col"></th>
                {Constans.TABLE_HISTORY_FIELD.map((item, index) => {
                  return (
                    <th key={index} scope="col" className="text-center">
                      {item}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {data?.length > 0 ? (
                data?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td className="text-center">{parseFloat(item.temp)}°C</td>
                      <td className="text-center">{parseFloat(item.humi)}%</td>
                      <td className="text-center">
                        <BadgeStatus
                          text={item.fan}
                          className={parseStatusBadge(item.fan)}
                        />
                      </td>
                      <td className="text-center">
                        <BadgeStatus
                          text={item.pump}
                          className={parseStatusBadge(item.pump)}
                        />
                      </td>
                      <td className="text-center">{item.typeMode}</td>
                      <td className="text-center">{parseTime(item.waktu)}</td>
                      <td className="text-center">{parseDate(item.waktu)}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={Constans.TABLE_HISTORY_FIELD.length + 1}
                    className="text-center"
                  >
                    Tidak ada {title ?? "data"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

TableHistory.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humi: PropTypes.number.isRequired,
      waktu: PropTypes.string.isRequired,
      fan: PropTypes.string.isRequired,
      pump: PropTypes.string.isRequired,
      setMode: PropTypes.shape({
        mode: PropTypes.string.isRequired,
      }),
    })
  ),
};
