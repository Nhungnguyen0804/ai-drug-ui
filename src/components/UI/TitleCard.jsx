import "./Card.css";
function TitleCard({
  Icon,
  title,
  subtitle = null,
  iconSize = "70%",
  iconStyle = { color: "white" },
  titleStyle = null,
}) {
  return (
    <div className="title-card">
      <div className="title-card-left" style={titleStyle}>
        <Icon style={iconStyle} size={iconSize} />
      </div>
      <div className="title-card-right">
        <h2 style={{ margin: 5 }}>{title}</h2>
        <p style={{ margin: 5 }}>{subtitle}</p>
      </div>
    </div>
  );
}

export default TitleCard;
