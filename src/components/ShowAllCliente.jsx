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
      <div>
        <div>
          <input
            name="barraBusqueda"
            placeholder="Id o nombre del cliente"
            onChange={handleInputSearchChange}
          ></input>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido paterno</th>
                <th scope="col">Apellido materno</th>
                <th scope="col">RFC</th>
                <th scope="col">Email</th>
                <th scope="col">Telefono</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>{cliente.nombre}</td>
                  <td>{cliente.apellidoPaterno}</td>
                  <td>{cliente.apellidoMaterno}</td>
                  <td>{cliente.rfcCliente}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.telefono}</td>
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
