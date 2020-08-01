import React from 'react';
import {Link,Route} from 'react-router-dom'
import './Routes.css';
import Api from '../llamadoApi/Api'
import App from '../../App'
import Card from '../Card'

class Routes extends React.Component {
    render(){
        return (
            <div className="menu">
                <nav>
                    <ul>
                        <li>
                            <Link to="/"><h1>Página de Inicio</h1></Link>
                        </li>
                        <li>
                            <Link to="/api"><h1>Rutas de las Api</h1></Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={App}/>
                <Route path="/api" component={Api}/>
                <Route path="/card" component={Card}/>
            </div>
        )
    }
}
export default Routes