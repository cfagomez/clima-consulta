import React from 'react'

const Formulario = () => {
  return (
    <div className='contenedor'>
        <form>
            <div className='campo'>
                <label>Ciudad:</label>
                <input type="text" />
            </div>
            <div className='campo'>
                <label>País</label>
                <input type="text" />
            </div>
            <input 
                type="submit"
                value="Consultar"
            />
        </form>
    </div>
  )
}

export default Formulario
