import Card from "../UI/Card";
import TitleCard from "../UI/TitleCard";
import ToxicityProgress from "./ToxicityProgress";
import { FlaskConical } from "lucide-react";

const OrganCard = ({ result }) => {
  const organLabelMap = {
    "Hepatobiliary disorders": "Hepatobiliary disorders (Rối loạn gan mật)",
    "Metabolism and nutrition disorders":
      "Metabolism and nutrition disorders (Rối loạn chuyển hóa và dinh dưỡng)",
    "Eye disorders": "Eye disorders (Rối loạn mắt)",
    "Musculoskeletal and connective tissue disorders":
      "Musculoskeletal and connective tissue disorders (Rối loạn cơ xương và mô liên kết)",
    "Gastrointestinal disorders":
      "Gastrointestinal disorders (Rối loạn tiêu hóa)",
    "Immune system disorders":
      "Immune system disorders (Rối loạn hệ miễn dịch)",
    "Reproductive system and breast disorders":
      "Reproductive system and breast disorders (Rối loạn hệ sinh sản và tuyến vú)",
    "General disorders and administration site conditions":
      "General disorders and administration site conditions (Rối loạn toàn thân và tại vị trí dùng thuốc)",
    "Endocrine disorders": "Endocrine disorders (Rối loạn nội tiết)",
    "Vascular disorders": "Vascular disorders (Rối loạn mạch máu)",
    "Blood and lymphatic system disorders":
      "Blood and lymphatic system disorders (Rối loạn máu và hệ bạch huyết)",
    "Skin and subcutaneous tissue disorders":
      "Skin and subcutaneous tissue disorders (Rối loạn da và mô dưới da)",
    "Congenital, familial and genetic disorders":
      "Congenital, familial and genetic disorders (Rối loạn bẩm sinh, gia đình và di truyền)",
    "Respiratory, thoracic and mediastinal disorders":
      "Respiratory, thoracic and mediastinal disorders (Rối loạn hô hấp, lồng ngực và trung thất)",
    "Psychiatric disorders": "Psychiatric disorders (Rối loạn tâm thần)",
    "Renal and urinary disorders":
      "Renal and urinary disorders (Rối loạn thận và tiết niệu)",
    "Ear and labyrinth disorders":
      "Ear and labyrinth disorders (Rối loạn tai và mê đạo)",
    "Cardiac disorders": "Cardiac disorders (Rối loạn tim mạch)",
    "Nervous system disorders":
      "Nervous system disorders (Rối loạn hệ thần kinh)",
  };

  return (
    <Card>
      <TitleCard
        Icon={FlaskConical}
        title={"Kết quả dự đoán độc tính theo cơ quan"}
        subtitle={
          "Giá trị biểu thị xác suất hoặc mức độ độc tính dự đoán cho từng hệ cơ quan"
        }
      />
      <hr />
      {Object.entries(result.organ_toxicity).map(([key, value]) => {
        // Bỏ tiền tố sider_
        const cleanKey = key.replace("sider_", "");

        return (
          <ToxicityProgress
            key={key}
            name={organLabelMap[cleanKey] || cleanKey}
            probability={value} // value: 0 → 1
          />
        );
      })}
    </Card>
  );
};

export default OrganCard;
