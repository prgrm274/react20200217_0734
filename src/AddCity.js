// 2020 Februari 21 Jum 09:32:48

import React, {Component} from "react";

class AddCity extends Component{
    state = {
        nama: null,
        luas: null,
        berpantai: null,
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addCity(this.state);
        // console.log(this.state)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="nama">Nama:</label>
                    <input type="text" id="nama" onChange={this.handleChange}/><p/>

                    <label htmlFor="luas">Luas:</label>
                    <input type="text" id="luas" onChange={this.handleChange}/><p/>

                    <label htmlFor="berpantai">Berpantai:</label>
                    <input type="text" id="berpantai" onChange={this.handleChange}/><p/>

                    <button>Save</button>
                </form>
            </div>
        )
    }
}

export default AddCity