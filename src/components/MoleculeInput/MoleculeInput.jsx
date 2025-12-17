import "./input.css";
import SmilesInput from "./SmilesInput";
import { useState } from "react";
import PredictButton from "./PredictButton";
import SmilesInfo from "./SmilesInfo";
import Card from "../UI/Card";

import { Pill } from "lucide-react";
import TitleCard from "../UI/TitleCard";

function MoleculeInput({ onResult, onError }) {
  const [smiles, setSmiles] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!smiles) return;

    setLoading(true);
    onError(null);

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
      onResult(data);
    } catch (err) {
      onError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card style={{ marginTop: 30 }}>
      <TitleCard
        Icon={Pill}
        title="Molecule Input"
        subtitle="Enter a SMILES notation to predict toxicity"
      />
      <hr />

      <SmilesInput onChange={setSmiles} />

      <PredictButton onClick={handlePredict} loading={loading} />
      <SmilesInfo />
    </Card>
  );
}

export default MoleculeInput;
