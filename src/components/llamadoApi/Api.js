import React from 'react';
import './Api.css';
class Api extends  React.Component {

  constructor(props){
    super(props)
    this.state={
      loading:true,
      items:[]
    }
  }

  componentDidMount(){
    this.setState(state=>({loading:false}))
    fetch('https://pokeapi.co/api/v2/evolution-chain/?limit=20&offset=20')
    .then(res=>res.json())
    .then((result)=>{
      console.log(result)
      this.setState({loading:true,items:result.results})
    })
    .catch()
  }

  render(){

    return (
      <div className="Api">
        {this.state.items.map((data,i)=>(
          <p className="parrafo1">{i}.  {data.url}
          <a href={data.url}>
          <button>
            Ver enlace
          </button>
          </a>
          </p>))}
      </div>      
    );
  }

}

export default Api;