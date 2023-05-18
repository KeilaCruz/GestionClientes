import { useState, useEffect } from "react";
import { editCliente, getCliente } from "../services/OperacionesCliente";


function EditCliente() {
  const [rfcCustomer, setRfcCustomer] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    apePaterno: "",
    apeMaterno: "",
    rfc: "",
    email: "",
    telefono: ""
  });

  useEffect(() => {
    async function setDatosCliente() {
      const datos = await getCliente(rfcCustomer);
      setFormData({
        id: datos.id,
        nombre: datos.nombre,
        apePaterno: datos.apellidoPaterno,
        apeMaterno: datos.apellidoMaterno,
        rfc: datos.rfcCliente,
        email: datos.email,
        telefono: datos.telefono
      })
    }
    setDatosCliente();
  }, [rfcCustomer])

  const handleInputChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    editCliente(rfcCustomer, formData.nombre, formData.apePaterno, formData.apeMaterno, formData.rfc, formData.email, formData.telefono);
    alert('Se ha editado el cliente');
  }
  return (
    <>
      <div className="bg-green-200 min-h-screen flex flex-col justify-center items-center">
        <div>
          <h3 className="font-medium text-center mb-2 mt-10 text-4xl">Editar cliente</h3>
        </div>
        <div className="px-20 pt-5 pb-1 mb-1 mt-2">
          <input name="entradaRfc" placeholder="Rfc de cliente a editar" onChange={(e) => setRfcCustomer(e.target.value)} className="w-full h-12 px-2 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-center px-10 pt-4 pb-4 mb-4">
          <form onSubmit={handleSubmit} className="w-1/3 bg-white p-6 shadow-md items-center justify-center">
            <label>Nombre</label>
            <input name="nombre" value={formData.nombre} onChange={handleInputChange} className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
            <label>Apellido paterno</label>
            <input name="apePaterno" value={formData.apePaterno} onChange={handleInputChange} className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
            <label>Apellido materno</label>
            <input name="apeMaterno" value={formData.apeMaterno} onChange={handleInputChange} className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
            <label>RFC</label>
            <input name="rfc" value={formData.rfc} onChange={handleInputChange} className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
            <label>Email</label>
            <input name="email" value={formData.email} onChange={handleInputChange} className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
            <label>Telefono</label>
            <input name="telefono" value={formData.telefono} onChange={handleInputChange} className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" />
            <div>
              <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-5 py-2.5 text-center mt-2 w-30 h-20 text-2xl ">Modificar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditCliente;