import Card from "../UI/Card";
import Molecule3D from "./Molecule3D";
import "./Result.css";
function ImageArea({ result }) {
  return (
    <div className="imageArea">
      {" "}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: 20, fontWeight: "bold" }}>2D Image</p>
        <Card
          style={{
            boxShadow: "none",
            border: "2px solid #ccc",
            borderRadius: 8,
          }}
        >
          <img
            src={`data:image/png;base64,${result.images["2d"]}`}
            alt="2D"
            style={{ width: "100%" }}
          />
        </Card>{" "}
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: 20, fontWeight: "bold" }}>3D Image</p>
        <Card
          style={{
            flex: 1,
            boxShadow: "none",
            border: "2px solid #ccc",
            borderRadius: 8,
          }}
        >
          <Molecule3D molBase64={result.images["3d"]} />
        </Card>
      </div>
    </div>
  );
}

export default ImageArea;
