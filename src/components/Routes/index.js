import React from 'react';
import {Link,Route} from 'react-router-dom'
import './Routes.css';

class Routes extends React.Component {
    render(){
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/category">Api</Link>
                        </li>
                        <li>
                            <Link to="/products">Url</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" component={Home}/>
                <Route path="/category" component={ApiPokemon}/>
                <Route path="/products" component={UrlsPokemon}/>
            </div>
        )
    }
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const ApiPokemon = () => (
    <div>
        <h2>ApiPokemon</h2>
    </div>
);

const UrlsPokemon = () => (
    <div>
        <h2>UrlsPokemon</h2>
    </div>
);

export default Routes