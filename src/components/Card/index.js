import React from 'react';
import './card.css';
import {Link} from 'react-router-dom';

class Card extends  React.Component {  

    constructor(props){
        super(props)
        this.state={
          loading:true,
          items:[],
          url:'card',
          card:''
        }
    }

      componentDidMount(){
        fetch(this.props.location.url)
        .then(res=>res.json())
        .then((result)=>{
          this.setState({loading: false, items: result.chain.evolves_to})
        })
        .catch()
    }

    render(){
        return(
            <div className="card">
            {this.state.items.map((data)=>(
              <p className="enlaces">Tú Pokémon ha evolucionado en un...{data.species.name}!!
                <Link to={{
                pathname:'/api',
                }}>
                    <button class="wrapper">Regresar</button>
                </Link>
              </p>))}
          </div>   

        )
    }
}
export default Card