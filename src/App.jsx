import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MoleculeInput from "./components/MoleculeInput/MoleculeInput";

import "./App.css";
import Result from "./components/Result/Result";
function App() {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  return (
    <>
      <Header />

      {/* Nội dung chính */}
      <div className="app-content">
        {/* card  */}
        <MoleculeInput onResult={setRes} onError={setError} />
        <Result result={res} error={error} />
      </div>
      <Footer />
    </>
  );
}

export default App;
