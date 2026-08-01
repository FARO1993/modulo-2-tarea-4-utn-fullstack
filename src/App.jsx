import { useState } from "react";
import FormularioContacto from "./components/FormularioContacto";
import FormularioContactoRHF from "./components/FormularioContactoRHF";
import "./App.css";

function App() {
  const [version, setVersion] = useState("vanilla");

  return (
    <div className="app">
      <header className="app__header">
        <h1>Manejo de eventos en formularios</h1>
        <p>onChange, onFocus, onBlur, onSubmit, onKeyDown, onMouseEnter/Leave</p>
      </header>

      <div className="app__tabs">
        <button
          className={version === "vanilla" ? "app__tab app__tab--activo" : "app__tab"}
          onClick={() => setVersion("vanilla")}
        >
          Formulario (eventos nativos)
        </button>
        <button
          className={version === "rhf" ? "app__tab app__tab--activo" : "app__tab"}
          onClick={() => setVersion("rhf")}
        >
          Versión con react-hook-form
        </button>
      </div>

      {version === "vanilla" ? <FormularioContacto /> : <FormularioContactoRHF />}
    </div>
  );
}

export default App;
