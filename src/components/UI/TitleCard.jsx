import "./Card.css";
import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import { FaSort } from "react-icons/fa";

function TitleCard({
  Icon,
  title,
  subtitle = null,
  iconSize = "70%",
  iconStyle = { color: "white" },
  titleStyle = null,
  onSort = null, // callback function khi sort
  sortDirection = null, // 'asc', 'desc', hoặc null
}) {
  return (
    <div className="title-card-general">
      <div className="title-card">
        <div className="title-card-left" style={titleStyle}>
          <Icon style={iconStyle} size={iconSize} />
        </div>
        <div className="title-card-right">
          <h2 style={{ margin: 5 }}>{title}</h2>
          <p style={{ margin: 5 }}>{subtitle}</p>
        </div>
      </div>
      {onSort && (
        <button
          className="title-card-btn-sort"
          style={titleStyle}
          onClick={onSort}
          title={
            sortDirection === "desc"
              ? "Sắp xếp từ thấp đến cao"
              : "Sắp xếp từ cao đến thấp"
          }
        >
          {sortDirection === "asc" ? (
            <FaSortAmountUp style={iconStyle} size={iconSize} />
          ) : sortDirection === "desc" ? (
            // z->a
            <FaSortAmountDown style={iconStyle} size={iconSize} />
          ) : (
            //default
            <FaSort style={iconStyle} size={iconSize} />
          )}
        </button>
      )}
    </div>
  );
}

export default TitleCard;
