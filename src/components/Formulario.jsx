import useClima from "../hooks/useClima"

const Formulario = () => {

    const {handleChangeDatos, datos, handleSubmit} = useClima()

    const {ciudad, pais} = datos
    
  return (
    <div className='contenedor'>
        <form
            onSubmit={handleSubmit}
        >
            <div className='campo'>
                <label>Ciudad:</label>
                <input 
                    type="text"
                    name='ciudad'
                    onChange={handleChangeDatos}
                    value={ciudad}
                />
            </div>
            <div className='campo'>
                <label>País</label>
                <select 
                    name="pais"
                    onChange={handleChangeDatos}
                    value={pais}
                >
                    <option value="">-- Seleccione una opción --</option>
                    <option value="argentina">Argentina</option>
                    <option value="brasil">Brasil</option>
                    <option value="españa">España</option>
                    <option value="hungria">Hungría</option>
                    <option value="portugal">Portugal</option>
                </select>
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
