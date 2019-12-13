import React from 'react';


import Menu from './Menu'
import Verao from './components/Verao'
import Primavera from './components/Primavera'
import Inverno from './components/Inverno'
import Outono from './components/Outono'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        estacoes: [
            'Verao',
            'Outono',
            'Inverno',
            'Primavera',
        ],
        selecionado: '',
      }
    }
    
    mudarEstacao = (estacao) => {
      this.setState({
          selecionado: estacao,
      });
  }

  renderizarEstacao = () => {
    switch(this.state.selecionado){
      case 'Verao':
        return <Verao />
        case 'Inverno':
          return <Inverno />
        case 'Outono':
          return <Outono />
        case 'Primavera':
          return <Primavera />
        default: 
        return null;
    }
  }


  render(){
      return (
        <div className="App">
        <Menu 
        estacoes={this.state.estacoes} 
        mudarEstacao={this.mudarEstacao} 
        />
        {this.renderizarEstacao()}
        </div>
      );
    }
}

