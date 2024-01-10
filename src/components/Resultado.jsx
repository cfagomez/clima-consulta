import useClima from "../hooks/useClima"

const Resultado = () => {

    const {resultado} = useClima()
    const {main} = resultado
    const {temp, feels_like, temp_min, temp_max, pressure, humidity} = main

  return (
    <div className="contenedor m-top">
      <div>
        <div className="flex-column">
          <p>{temp}</p>
          <p>{feels_like}</p>
        </div>
        <div>
          <p>{temp_min}</p>
          <p>{temp_max}</p>
        </div>
      </div>
      <div>
        <p>{pressure}</p>
        <p>{humidity}</p>
      </div>
    </div>
  )
}

export default Resultado
