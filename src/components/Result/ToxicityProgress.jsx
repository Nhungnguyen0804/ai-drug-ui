import { Progress } from "antd";

const ToxicityProgress = ({ name, probability }) => {
  const percent = Math.round(probability * 100);

  // đổi màu theo % độc
  let strokeColor = "#52c41a"; // xanh
  if (percent >= 70) strokeColor = "#ff4d4f"; // đỏ
  else if (percent >= 40) strokeColor = "#faad14"; // vàng

  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{name}</span>
        {/* <b>{percent}%</b> */}
      </div>

      <Progress percent={percent} strokeColor={strokeColor} />
    </div>
  );
};

export default ToxicityProgress;
