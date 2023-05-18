import { useNavigate } from "react-router-dom";

function Menu() {
  
  const navigateShowSearch = useNavigate();
  const navigateAdd = useNavigate();
  const navigateDelete = useNavigate();
  const navigateEdit = useNavigate();

  const handleShowSearch = () =>{
    navigateShowSearch('/clientes-actuales');
  }
  const handleAdd = () =>{
    navigateAdd('/nuevo-cliente')
  }
  const handleEdit= () =>{
    navigateEdit('/editar-cliente')
  }
  const handleDelete= () =>{
    navigateDelete('/eliminar-cliente')
  }
  return (
    <>
     <div>
        <div>
            <button onClick={handleShowSearch}>Visualizar clientes</button>
        </div>
        <div>
            <button onClick={handleAdd}>Agregar cliente</button>
        </div>
        <div>
            <button onClick={handleEdit}>Modificar cliente</button>
        </div>
        <div>
            <button onClick={handleDelete}>Eliminar cliente</button>
        </div>
     </div>
    </>
  )
}

export default Menu;