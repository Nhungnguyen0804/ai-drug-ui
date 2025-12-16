import "./input.css";
function SmilesInput({ value, onChange }) {
  return (
    <div className="smiles-input">
      <label>SMILES Notation</label>
      <input
        type="text"
        placeholder="Ví dụ: CC(=O)Oc1ccccc1C(=O)O"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SmilesInput;
