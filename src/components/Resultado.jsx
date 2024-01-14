import useClima from "../hooks/useClima"

const Resultado = () => {

    const {resultado} = useClima()
    const {main} = resultado
    const {temp, feels_like, temp_min, temp_max, pressure, humidity} = main

    const kelvin = 273.15

  return (
    <div className="contenedor m-top">
      <div className="contenedor-resultado">
        <div className="contenedor-datos-principales">
          <p className="p-temp-actual">{parseInt(temp - kelvin)}°C</p>
          <p className="p-feels-like"><span>Sensación térmica:</span> {parseInt(feels_like - kelvin)}°C</p>
        </div>
        <div className="contenedor-datos-secundarios">
          <div>
            <span>Máxima:</span>
            <p>{parseInt(temp_min - kelvin)}°C</p>
          </div>
          <hr />
          <div>
            <span>Mínima:</span>
            <p>{parseInt(temp_max - kelvin)}°C</p>
          </div>
          <hr />
          <div>
            <span>Presión:</span>
            <p>{pressure}mb</p>
          </div>
          <hr />   
          <div>
            <span>Humedad:</span>
            <p>{humidity}%</p>
          </div>        
        </div>
      </div>
    </div>
  )
}

export default Resultado
