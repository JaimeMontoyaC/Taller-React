import React from 'react';
import './App.css';

class App extends  React.Component {

  constructor(props){
    super(props)
    this.state={
      loading:true,
      items:[],
      url:'home',
      api:''
    }
  }

  render(){

    return (
      <div className="App">
        <Header name={'Maestro Pokémon!'}></Header> 
      </div>      
    );
  }
}

const Header = (props) =>  
<header className="App-header">
  <img className="imgPokemon" src={process.env.PUBLIC_URL + '/logoPokemonHome.png'} alt="logo" />
  <img className="logoPokemon" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
  <p className="frase">
    Solo tienes que atraparlos ya! ... Pokemón!!
  </p>
  <img className="iconoPokemon" src={process.env.PUBLIC_URL + '/logoPokemon.png'} alt="logo" />
  <a 
    className="App-link"
    href="https://www.youtube.com/watch?v=uDIoEbbFKAY"
    target="_blank"
    rel="noopener noreferrer"
    title="Vamos... quieres hacerlo."
  >
    ¿Quieres revivir tu infancia? ... {props.name}
    ...Solo debes... dar Click aqui! 
  </a>
  </header>


export default App;
