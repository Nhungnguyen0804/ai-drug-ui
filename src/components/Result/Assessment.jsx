import { Progress } from "antd";
import "./Result.css";
import Card from "../UI/Card";
import TitleCard from "../UI/TitleCard";
import { CircleCheckBig } from "lucide-react";
import { Info } from "lucide-react";
import { OctagonAlert } from "lucide-react";

function Assessment({ result }) {
  const probability = result.binary_toxicity.probability; // 0 -> 1
  const percent = Math.round(probability * 100);

  let riskText = "";
  let strokeColor = "";
  let hrColor = "";
  let cardStyle = {};
  let IconResult = null;

  if (probability < 0.2) {
    riskText = "Nguy cơ thấp";
    strokeColor = "#91F1B7"; // xanh nhạt
    hrColor = strokeColor;
    IconResult = CircleCheckBig;
    cardStyle = {
      border: "2px solid #91F1B7",
      background: "#F0FDF4",
    };
  } else if (probability <= 0.5) {
    riskText = "Nguy cơ trung bình";
    strokeColor = "#FADB14"; // vàng nhạt
    hrColor = strokeColor;
    IconResult = Info;
    cardStyle = {
      border: "2px solid #FADB14",
      background: "#FFFBE6",
    };
  } else {
    riskText = "Nguy cơ cao";
    strokeColor = "#FF4D4F"; // đỏ
    hrColor = strokeColor;
    IconResult = OctagonAlert;
    cardStyle = {
      border: "2px solid #FF4D4F",
      background: "#FFF1F0",
    };
  }

  return (
    <Card style={cardStyle}>
      <TitleCard
        Icon={IconResult}
        title={"Đánh giá độc tính dự đoán"}
        subtitle={"(Dựa trên công thức SMILES)"}
        iconSize={"100%"}
        iconStyle={{ color: `${hrColor}`, width: "150px" }}
        titleStyle={{ background: "none" }}
      />

      <hr style={{ border: `1px solid ${hrColor}` }} />

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <span>Nguy cơ độc tính tổng quát</span>
          <span>{percent}%</span>
        </div>

        <Progress percent={percent} strokeColor={strokeColor} />

        <p className="text-sm mt-2">
          Mức độ đánh giá: <strong>{riskText}</strong>
        </p>

        <p className="text-xs text-muted mt-1">
          ⓘ Xác suất phân tử có ít nhất một đặc tính độc tính theo mô hình dự
          đoán
        </p>
      </div>
    </Card>
  );
}

export default Assessment;
