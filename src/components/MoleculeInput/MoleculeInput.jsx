import "./input.css";
import SmilesInput from "./SmilesInput";
import { useState } from "react";
import PredictButton from "./PredictButton";
import SmilesInfo from "./SmilesInfo";
import Card from "../UI/Card";

import { Pill } from "lucide-react";

function MoleculeInput() {
  const [smiles, setSmiles] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePredict = async () => {
    if (!smiles) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          smiles: smiles,
          skip_image: false,
        }),
      });

      if (!response.ok) {
        throw new Error("API error");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card style={{ marginTop: 30 }}>
      <div className="title-card-input">
        <div className="title-card-input-left">
          <Pill style={{ color: "white" }} />
        </div>
        <div className="title-card-input-right">
          <h2 style={{ margin: 5 }}>Molecule Input</h2>
          <p style={{ margin: 5 }}>
            Enter a SMILES notation to predict toxicity
          </p>
        </div>
      </div>
      <hr />

      <SmilesInput onChange={setSmiles} />

      <PredictButton onClick={handlePredict} loading={loading} />
      <SmilesInfo result={result} error={error} />
    </Card>
  );
}

export default MoleculeInput;
