import { Route, Routes } from "react-router-dom";
import AddCliente from "../components/AddCliente";
import ShowAllCliente from "../components/ShowAllCliente";
import EditCliente from "../components/EditCliente";
import DeleteCliente from "../components/DeleteCliente";
import Menu from "../components/Menu";

function Rutas(){
    return(<>
    <Routes>
        <Route path="/" element={<Menu/>}></Route>
        <Route path="nuevo-cliente" element={<AddCliente/>}></Route>
        <Route path="clientes-actuales" element={<ShowAllCliente/>}></Route>
        <Route path="editar-cliente" element={<EditCliente/>}></Route>
        <Route path="eliminar-cliente" element={<DeleteCliente/>}></Route>
    </Routes>
    </>)
}
export default Rutas;