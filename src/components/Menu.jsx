import { useNavigate } from "react-router-dom";

function Menu() {

  const navigateShowSearch = useNavigate();
  const navigateAdd = useNavigate();
  const navigateDelete = useNavigate();
  const navigateEdit = useNavigate();

  const handleShowSearch = () => {
    navigateShowSearch('/clientes-actuales');
  }
  const handleAdd = () => {
    navigateAdd('/nuevo-cliente')
  }
  const handleEdit = () => {
    navigateEdit('/editar-cliente')
  }
  const handleDelete = () => {
    navigateDelete('/eliminar-cliente')
  }
  return (
    <>
      <div className="bg-green-200 h-screen overflow-hidden">
        <div className="bg-green-200">
          <h3 className="font-medium text-center mb-6 mt-40 text-6xl">¡Bienvenido!</h3>
        </div>
        <div className="text-center mb-2 mt-30">
          <button onClick={handleShowSearch} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 w-60 h-20 text-2xl">Visualizar clientes</button>
        </div>
        <div className="text-center mb-2">
          <button onClick={handleAdd} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2 w-60 h-20 text-2xl">Agregar cliente</button>
        </div>
        <div className="text-center mb-2">
          <button onClick={handleEdit} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 w-60 h-20 text-2xl">Modificar cliente</button>
        </div>
        <div className="text-center mb-2">
          <button onClick={handleDelete} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 w-60 h-20 text-2xl">Eliminar cliente</button>
        </div>
      </div>
    </>
  )
}

export default Menu;