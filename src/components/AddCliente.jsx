import { useState } from "react";
import { addCliente } from "../services/OperacionesCliente";

function AddCliente() {
  const [dataForm, setDataForm] = useState({
    nombre: "",
    apePaterno: "",
    apeMaterno: "",
    rfc: "",
    email: "",
    telefono: "",
  });
  const handleInputChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addCliente(
      dataForm.nombre,
      dataForm.apePaterno,
      dataForm.apeMaterno,
      dataForm.rfc,
      dataForm.email,
      dataForm.telefono
    );
    alert('Se ha añadido al cliente');
  };
  return (
    <>
      <div>
        <div>
          <h3>Agregar nuevo cliente</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              name="nombre"
              placeholder="Ej. Angel david"
              value={dataForm.nombre}
              onChange={handleInputChange}
            />
            <input
              name="apePaterno"
              placeholder="Ej. Martínez"
              value={dataForm.apePaterno}
              onChange={handleInputChange}
            />
            <input
              name="apeMaterno"
              placeholder="Ej. Gracia"
              value={dataForm.apeMaterno}
              onChange={handleInputChange}
            />
            <input
              name="rfc"
              placeholder="Ej. EJM951103 H34"
              value={dataForm.rfc}
              onChange={handleInputChange}
            />
            <input
              name="email"
              placeholder="Ej. angel@gmail.com"
              value={dataForm.email}
              onChange={handleInputChange}
            />
            <input
              name="telefono"
              placeholder="Ej. 9212345689"
              value={dataForm.telefono}
              onChange={handleInputChange}
            />
            <button>Agregar</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddCliente;
