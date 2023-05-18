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
      <div className="bg-green-200 h-screen overflow-hidden">
        <div>
          <h3 className="font-medium text-center mb-6 mt-20 text-4xl">Agregar nuevo cliente</h3>
        </div>
        <div className="flex items-center justify-center px-10 pt-4 pb-4 mb-4">
          <form onSubmit={handleSubmit} className="w-1/3 bg-white p-6 shadow-md items-center justify-center h-[500px]">
            <input
              name="nombre"
              placeholder="Ej. Angel david"
              value={dataForm.nombre}
              onChange={handleInputChange}
              className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            />
            <input
              name="apePaterno"
              placeholder="Ej. Martínez"
              value={dataForm.apePaterno}
              onChange={handleInputChange}
              className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            />
            <input
              name="apeMaterno"
              placeholder="Ej. Gracia"
              value={dataForm.apeMaterno}
              onChange={handleInputChange}
              className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            />
            <input
              name="rfc"
              placeholder="Ej. EJM951103 H34"
              value={dataForm.rfc}
              onChange={handleInputChange}
              className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            />
            <input
              name="email"
              placeholder="Ej. angel@gmail.com"
              value={dataForm.email}
              onChange={handleInputChange}
              className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            />
            <input
              name="telefono"
              placeholder="Ej. 9212345689"
              value={dataForm.telefono}
              onChange={handleInputChange}
              className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
            />
            <div>
              <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 w-30 h-20 text-2xl">Agregar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default AddCliente;
