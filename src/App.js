import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
      {
        nome:'Programação',
        corPrimaria:'#57C278',
        corSecundaria: '#D9F7E9',
        sombra: '5px 5px 15px #57C278'
      },

      {
        nome:'Front-End',
        corPrimaria:'#82CFFA',
        corSecundaria: '#E8F8FF',
        sombra: '5px 5px 15px #82CFFA'
      },

      {
        nome:'Data Science',
        corPrimaria:'#A6D157',
        corSecundaria: '#F0F8E2',
        sombra: '5px 5px 15px #A6D157'
      },

      {
        nome:'Devops',
        corPrimaria:'#E06B69',
        corSecundaria: '#FDE7E8',
        sombra:'5px 5px 15px #E06B69'
      },

      {
        nome:'UX e Design',
        corPrimaria:'#D86EBF',
        corSecundaria: '#FAE5F5',
        sombra:'5px 5px 15px #D86EBF'
      },
      
      {
        nome:'Mobile',
        corPrimaria:'#FEBA05',
        corSecundaria: '#FFF5D9',
        sombra:'5px 5px 15px #FEBA05'
      },
      
      {
        nome:'Inovação e Gestão',
        corPrimaria:'#FF8A29',
        corSecundaria: '#FFEEDF',
        sombra:'5px 5px 15px #FF8A29'
      }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      sombra={time.sombra}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    
      <Rodape/>
    </div>
  );
}

export default App;
