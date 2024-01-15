import Formulario from "./components/Formulario"
import NoResultado from "./components/NoResultado"
import Resultado from "./components/Resultado"
import useClima from "./hooks/useClima"
import Spinner from "./components/Spinner"

function App() {

  const {resultado, noResultado, cargando} = useClima()

  return (
    <>
      <header>
        <h1>Clima App</h1>
      </header>
      <main>
        <Formulario />
        {
          cargando ? <Spinner /> : resultado ? <Resultado /> : <NoResultado />
        }
        
      </main>
    </>
  )
}

export default App
