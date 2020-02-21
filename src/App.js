import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Cities from './Cities'

class App extends Component{
    state = {
        cities : [
            { nama: 'Mojokerto', luas: 500, berpantai: false, id: 1},
            { nama: 'Jakarta', luas: 1000, berpantai: false, id: 2},
            { nama: 'Surabaya', luas: 700, berpantai: false, id: 3},
        ]
    }
    render() {
        return (
            <div className="App">
                <h1>Data kota</h1>
                <p>Welcome :)</p>
                {/*<Cities nama="Jakarta" luas="1000" berpantai="true"/>*/}
                <Cities cities={this.state.cities} />
            </div>
        );
    }
}
/*function App() {
    return..
}*/

export default App;
