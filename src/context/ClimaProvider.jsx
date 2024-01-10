import { createContext, useState } from "react"

export const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    const [datos, setDatos] = useState({
        ciudad: '',
        pais: ''
    })
    const [resultado, setResultado] = useState(null)
    const [noResultado, setNoResultado] = useState(null)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = (e) => {

        setDatos({

            ...datos,
            [e.target.name]: e.target.value

        })

    }

    const consultarClima = async () => {

        setResultado(null)
        setNoResultado(null)
        setCargando(true)

        const {ciudad, pais} = datos

        try {

            const appId = import.meta.env.VITE_API_KEY
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            const {lat, lon} = resultado[0]
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const respuestaClima = await fetch(urlClima)
            const resultadoClima = await respuestaClima.json()
            setResultado(resultadoClima)

        } catch (error) {

            setNoResultado('No se han encontrado resultados')

        } finally {

            setCargando(false)

        }

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        if (Object.values(datos).includes('')) {

            console.log('Debe completar todos los datos')

            return

        }

        consultarClima()

    }

  return (
    <ClimaContext.Provider value={{handleChangeDatos, datos, handleSubmit, resultado, noResultado, cargando}}>
        {children}
    </ClimaContext.Provider>
  )
}

export default ClimaProvider
