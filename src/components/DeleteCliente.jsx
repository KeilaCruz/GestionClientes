import { useEffect, useState } from "react"
import { deleteCliente, getCliente } from "../services/OperacionesCliente";

function DeleteCliente() {
  const [rfcCustomer, setRfcCustomer] = useState("");
  const [datosCliente, setDatos] = useState({
    id:"",
    nombre:"",
    apePaterno:"",
    apeMaterno:"",
    rfc:"",
    email:"",
    telefono:""
  });
  useEffect(() => {
    async function getDatos() {
      const datos = await getCliente(rfcCustomer);
      setDatos({
        id:datos.id,
        nombre: datos.nombre,
        apePaterno: datos.apellidoPaterno,
        apeMaterno: datos.apellidoMaterno,
        rfc: datos.rfcCliente,
        email: datos.email,
        telefono: datos.telefono
      })
    }
    getDatos();
  },[rfcCustomer])
  const handleDelete = () =>{
    deleteCliente(rfcCustomer);
    alert('Se elimino el cliente');
  }
  return (
    <>
      <div>
        <div>
          <input placeholder="Rfc del cliente a eliminar" onChange={(e) => setRfcCustomer(e.target.value)} />
        </div>
        <div>
          <label>Id</label>
          <input value={datosCliente.id} disabled />
          <label>Nombre</label>
          <input value={datosCliente.nombre} disabled />
          <label>Apellido paterno</label>
          <input value={datosCliente.apePaterno} disabled />
          <label>Apellido materno</label>
          <input value={datosCliente.apeMaterno} disabled />
          <label>Rfc</label>
          <input value={datosCliente.rfcCliente} disabled />
          <label>Email</label>
          <input value={datosCliente.email} disabled />
          <label>Telefono</label>
          <input value={datosCliente.telefono} disabled />
        </div>
        <div>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      </div>
    </>
  )
}

export default DeleteCliente