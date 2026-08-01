import { useForm } from "react-hook-form";
import "./FormularioContacto.css";

function FormularioContactoRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    console.log("Datos enviados (react-hook-form):", datos);
  };

  return (
    <div className="formulario-wrapper">
      <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
        <div className="formulario__campo">
          <label htmlFor="nombre-rhf">Nombre</label>
          <input
            id="nombre-rhf"
            type="text"
            placeholder="Tu nombre"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && (
            <p className="formulario__enter">El nombre es obligatorio</p>
          )}
        </div>

        <div className="formulario__campo">
          <label htmlFor="email-rhf">Correo electrónico</label>
          <input
            id="email-rhf"
            type="email"
            placeholder="tu@email.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="formulario__enter">El email es obligatorio</p>
          )}
        </div>

        <button type="submit" className="formulario__boton">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormularioContactoRHF;
