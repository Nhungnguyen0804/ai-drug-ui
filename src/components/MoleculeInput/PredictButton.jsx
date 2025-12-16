import "./input.css";
function PredictButton({ onClick, loading }) {
  return (
    <button className="predict-button" onClick={onClick} disabled={loading}>
      {loading ? "⏳ Predicting..." : "✨ Predict Toxicity"}
    </button>
  );
}

export default PredictButton;
