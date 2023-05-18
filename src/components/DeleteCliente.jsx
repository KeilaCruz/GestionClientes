import { useEffect, useState } from "react"
import { deleteCliente, getCliente } from "../services/OperacionesCliente";

function DeleteCliente() {
  const [rfcCustomer, setRfcCustomer] = useState("");
  const [datosCliente, setDatos] = useState({
    id: "",
    nombre: "",
    apePaterno: "",
    apeMaterno: "",
    rfc: "",
    email: "",
    telefono: ""
  });
  useEffect(() => {
    async function getDatos() {
      const datos = await getCliente(rfcCustomer);
      setDatos({
        id: datos.id,
        nombre: datos.nombre,
        apePaterno: datos.apellidoPaterno,
        apeMaterno: datos.apellidoMaterno,
        rfc: datos.rfcCliente,
        email: datos.email,
        telefono: datos.telefono
      })
    }
    getDatos();
  }, [rfcCustomer])
  const handleDelete = () => {
    deleteCliente(rfcCustomer);
    alert('Se elimino el cliente');
  }
  return (
    <>
      <div className="bg-green-200 min-h-screen flex flex-col justify-center items-center">
        <div>
          <h3 className="font-medium text-center mb-2 mt-10 text-4xl">Eliminar cliente</h3>
        </div>
        <div className="px-20 pt-5 pb-1 mb-1 mt-2">
          <input placeholder="Rfc del cliente a eliminar" onChange={(e) => setRfcCustomer(e.target.value)} className="w-full h-12 px-2 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
        </div>
        <div className="w-1/2 bg-white p-4 shadow-md">
          <label>Id</label>
          <input value={datosCliente.id} disabled className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
          <label>Nombre</label>
          <input value={datosCliente.nombre} disabled className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
          <label>Apellido paterno</label>
          <input value={datosCliente.apePaterno} disabled className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
          <label>Apellido materno</label>
          <input value={datosCliente.apeMaterno} disabled className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
          <label>Rfc</label>
          <input value={datosCliente.rfc} disabled className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
          <label>Email</label>
          <input value={datosCliente.email} disabled className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
          <label>Telefono</label>
          <input value={datosCliente.telefono} disabled className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
        </div>
        <div>
          <button onClick={handleDelete} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-5 py-2.5 text-center mt-2 w-30 h-20 text-2xl ">Eliminar</button>
        </div>
      </div>
    </>
  )
}

export default DeleteCliente