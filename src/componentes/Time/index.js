import'./Time.css'

const Time = (props)=> {

const back = {backgroundColor: props.corSecundaria}
const border ={borderColor: props.corPrimaria}
    return (
        <section className='Time' style={back}> 
            <h3 style={border}>{props.nome}</h3>
        </section>
    )
}

export default Time