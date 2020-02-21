import React, {Component} from "react";

class Cities extends Component {
    render() {
        // console.log(this.props);

        // const {nama, luas, berpantai} = this.props;
        const {cities} = this.props;
        const cityList = cities.map(city => {
            return (
                <div className="city" key={city.id}>
                    <div>Nama: {city.nama}</div>
                    <div>Luas: {city.luas}</div>
                    <div>Berpantai: {city.berpantai}</div>
                    <p/><p/>
                </div>
            )
        });
        return(
            <div className="city-list">{ cityList }</div>
        )
    }
}

export default Cities