import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MoleculeInput from "./components/MoleculeInput/MoleculeInput";

import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      {/* Nội dung chính */}
      <div className="app-content">
        <MoleculeInput />
      </div>
      <Footer />
    </>
  );
}

export default App;
