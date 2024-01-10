import { createContext, useState } from "react"

export const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    const [datos, setDatos] = useState({
        ciudad: '',
        pais: ''
    })

    const handleChangeDatos = (e) => {

        setDatos({

            ...datos,
            [e.target.name]: e.target.value

        })

    }

  return (
    <ClimaContext.Provider value={{handleChangeDatos, datos}}>
        {children}
    </ClimaContext.Provider>
  )
}

export default ClimaProvider
