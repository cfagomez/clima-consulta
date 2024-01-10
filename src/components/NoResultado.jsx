import useClima from '../hooks/useClima'

const NoResultado = () => {

    const {noResultado} = useClima()

  return (
    <div>
      {noResultado}
    </div>
  )
}

export default NoResultado
