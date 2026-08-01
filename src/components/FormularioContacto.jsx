import { useState } from "react";
import "./FormularioContacto.css";

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [campoActivo, setCampoActivo] = useState(null);
  const [mensajeEnter, setMensajeEnter] = useState("");
  const [botonHover, setBotonHover] = useState(false);
  const [enviado, setEnviado] = useState(null);

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
    console.log("onChange nombre:", e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log("onChange email:", e.target.value);
  };

  const handleFocus = (campo) => {
    setCampoActivo(campo);
  };

  const handleBlur = () => {
    setCampoActivo(null);
  };

  const handleKeyDownNombre = (e) => {
    if (e.key === "Enter") {
      setMensajeEnter("Presionaste Enter en el campo nombre");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = { nombre, email };
    console.log("Datos enviados:", datos);
    setEnviado(datos);
  };

  return (
    <div className="formulario-wrapper">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="formulario__campo">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={handleChangeNombre}
            onFocus={() => handleFocus("nombre")}
            onBlur={handleBlur}
            onKeyDown={handleKeyDownNombre}
            placeholder="Tu nombre"
          />
          {campoActivo === "nombre" && (
            <p className="formulario__hint">Campo nombre activo</p>
          )}
        </div>

        <div className="formulario__campo">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleChangeEmail}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            placeholder="tu@email.com"
          />
          {campoActivo === "email" && (
            <p className="formulario__hint">Campo email activo</p>
          )}
        </div>

        {mensajeEnter && <p className="formulario__enter">{mensajeEnter}</p>}

        <button
          type="submit"
          className={botonHover ? "formulario__boton formulario__boton--hover" : "formulario__boton"}
          onMouseEnter={() => setBotonHover(true)}
          onMouseLeave={() => setBotonHover(false)}
        >
          Enviar
        </button>
      </form>

      {enviado && (
        <div className="formulario__resultado">
          <p>Formulario enviado correctamente:</p>
          <ul>
            <li>Nombre: {enviado.nombre}</li>
            <li>Email: {enviado.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default FormularioContacto;
