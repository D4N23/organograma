import Colaborador from '../Colaborador'
import'./Time.css'

const Time = (props)=> {

const back = {backgroundColor: props.corSecundaria}
const border ={borderColor: props.corPrimaria}
    return (
        props.colaboradores.length > 0 && <section className='Time' style={back}> 
            <h3 style={border}>{props.nome}</h3>
            <div className='colaboradoes'>

                {props.colaboradores.map(colaborador => <Colaborador 
                nome={colaborador.nome} 
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}/>)}

            </div>
            
            
        </section>
    )
}

export default Time