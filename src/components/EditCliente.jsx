import { useState, useEffect } from "react";
import { editCliente, getCliente } from "../services/OperacionesCliente";


function EditCliente() {
  const [rfcCustomer, setRfcCustomer] = useState("");
  const [formData, setFormData] = useState({
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
  const handleSubmit = (evt) =>{
    editCliente(rfcCustomer,formData.nombre,formData.apePaterno,formData.apeMaterno,formData.rfc, formData.email,formData.telefono);
    alert('Se ha editado el cliente');
  }
  return (
    <>
      <div>
        <input name="entradaRfc" placeholder="Rfc de cliente a editar" onChange={(e) => setRfcCustomer(e.target.value)} />
        <div>
          <form onSubmit={handleSubmit}>
           <label>Nombre</label>
            <input name="nombre" value={formData.nombre} onChange={handleInputChange} />
            <label>Apellido paterno</label>
            <input name="apePaterno" value={formData.apePaterno} onChange={handleInputChange} />
            <label>Apellido materno</label>
            <input name="apeMaterno" value={formData.apeMaterno} onChange={handleInputChange} />
            <label>RFC</label>
            <input name="rfc" value={formData.rfc} onChange={handleInputChange} />
            <label>Email</label>
            <input name="email" value={formData.email} onChange={handleInputChange} />
            <label>Telefono</label>
            <input name="telefono" value={formData.telefono} onChange={handleInputChange} />
            <button>Modificar</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditCliente;