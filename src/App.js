import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Batman from './Batman'

class App extends Component{
    render() {
        return (
            <div className="App">
                <h1>My first react app</h1>
                <p>Welcome :)</p>
                <Batman nama="Ryu" umur="25" pekerjaan="Conserver"/>
            </div>
        );
    }
}
/*function App() {
    return..
}*/

export default App;
