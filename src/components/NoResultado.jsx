import useClima from '../hooks/useClima'

const NoResultado = () => {

    const {noResultado} = useClima()

  return (
    <div className='contenedor m-top'>
      <p className='p-no-resultado'>{noResultado}</p>
    </div>
  )
}

export default NoResultado
