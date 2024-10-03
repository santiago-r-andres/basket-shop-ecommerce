import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer
        texto='Bienvenido a la Tienda más completa de la Naranja' />
    </>
  )
}

export default App
