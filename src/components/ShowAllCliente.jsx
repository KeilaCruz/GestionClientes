import { useEffect, useState } from "react";
import { showAndSearchCliente } from "../services/OperacionesCliente";

function ShowAllCliente() {
  const [clientes, setClientes] = useState([]);
  const [idCliente, setIdCliente] = useState(null);
  const [nomCliente, setNomCliente] = useState("");

  useEffect(() => {
    async function showCliente() {
      const datos = await showAndSearchCliente(idCliente, nomCliente);
      setClientes(datos);
    }
    showCliente();
  }, [idCliente, nomCliente]);
  const handleInputSearchChange = (evt) => {
    const entrada = evt.target.value;
    if (entrada.length == 0) {
      setIdCliente(null);
      setNomCliente(null);
    } else if (!isNaN(entrada)) {
      setIdCliente(parseInt(entrada));
      setNomCliente(null);
    } else {
      setIdCliente(null);
      setNomCliente(entrada);
    }
  };

  return (
    <>
      <div className="bg-green-200 min-h-screen flex flex-col justify-center items-center">
        <div >
          <div className="px-20 pt-5 pb-1 mb-1 mt-2">
            <h3 className="font-medium text-center mb-2 mt-10 text-4xl">Visualizar y consultar</h3>
          </div>
          <input
            name="barraBusqueda"
            placeholder="Id o nombre del cliente"
            onChange={handleInputSearchChange} className="w-full h-12 px-2 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          ></input>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-black-500 dark:text-black-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-6 py-4">
              <tr>
                <th scope="col" className="px-6 py-3">Id</th>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Apellido paterno</th>
                <th scope="col" className="px-6 py-3">Apellido materno</th>
                <th scope="col" className="px-6 py-3">RFC</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Telefono</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id} className="bg-white border-b dark:bg-white-800 dark:border-gray-700">
                  <td className="px-6 py-4">{cliente.id}</td>
                  <td className="px-6 py-4">{cliente.nombre}</td>
                  <td className="px-6 py-4">{cliente.apellidoPaterno}</td>
                  <td className="px-6 py-4">{cliente.apellidoMaterno}</td>
                  <td className="px-6 py-4">{cliente.rfcCliente}</td>
                  <td className="px-6 py-4">{cliente.email}</td>
                  <td className="px-6 py-4">{cliente.telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ShowAllCliente;
