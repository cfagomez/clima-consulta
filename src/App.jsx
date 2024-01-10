import Formulario from "./components/Formulario"
import NoResultado from "./components/NoResultado"
import Resultado from "./components/Resultado"
import useClima from "./hooks/useClima"

function App() {

  const {resultado, noResultado} = useClima()

  return (
    <>
      <header>
        <h1>Consulta Clima</h1>
      </header>
      <main>
        <Formulario />
        {
          resultado ? <Resultado /> : <NoResultado />
        }
        
      </main>
    </>
  )
}

export default App
