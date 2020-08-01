import React from 'react';
import './Api.css';
import {Link} from 'react-router-dom';

class Api extends  React.Component {

  constructor(props){
    super(props)
    this.state={
      loading:true,
      items:[],
      url:'api',
      api:''
    }
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/evolution-chain/?limit=20&offset=20')
    .then(res=>res.json())
    .then((result)=>{
      this.setState({loading:true,items:result.results})
    })
    .catch()
  }

  render(){
    return (    
      <div className="Api">
        {this.state.items.map((data)=>(
        <Link to={{
            pathname:'/card',
            url:data.url
        }}>
          <p className="enlaces">{data.url}</p>
        </Link>))}
      </div>      
    );
  }

}

export default Api;