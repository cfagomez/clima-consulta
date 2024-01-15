import React from 'react'
import useClima from '../hooks/useClima'

const Error = () => {

    const {error} = useClima()

  return (
    <div className='contenedor error'>
      <p>{error}</p>
    </div>
  )
}

export default Error
