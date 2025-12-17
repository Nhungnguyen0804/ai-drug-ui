import Card from "../UI/Card";
import { Image } from "lucide-react";
import ImageArea from "./ImageArea";
import Assessment from "./Assessment";
import TitleCard from "../UI/TitleCard";
import OrganCard from "./OrganCard";
function Result({ result, error }) {
  if (error) {
    return <p style={{ color: "red" }}>❌ {error}</p>;
  }
  if (!result) return null;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
      <h3
        style={{
          fontSize: 30,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
          marginBottom: 0,
        }}
      >
        Result 🧪
      </h3>
      <Card>
        <TitleCard
          Icon={Image}
          title={result.smiles}
          // subtitle={`Thời gian hiển thị: ${result.inference_time} (giây)`}
        />
        <hr /> {/* phần ảnh 2d 3d  */}
        <ImageArea result={result} />
      </Card>
      <Assessment result={result} />
      <OrganCard result={result} />
      {/* <pre
        style={{
          background: "#111",
          color: "#0f0",
          padding: 10,
          borderRadius: 6,
          maxHeight: 300,
          overflow: "auto",
        }}
      >
        {JSON.stringify(result, null, 2)}
      </pre> */}
    </div>
  );
}
export default Result;
