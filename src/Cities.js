import React from "react";

const Cities = ({cities}) => {
    // console.log(this.props);
    // const {nama, luas, berpantai} = this.props;
    const cityList = cities.map(city => {
        /*if (city.luas > 500) {
            return (
                <div className="city" key={city.id}>
                    <div>Nama: {city.nama}</div>
                    <div>Luas: {city.luas}</div>
                    <div>Berpantai: {city.berpantai}</div>
                    <p/><p/>
                </div>
            )

        } else {
            return null
        }*/


    });


    return(
        <div className="city-list">{
            cities.map(city => {
                // todo using ternary
                return city.luas > 500 ? (
                    <div className="city" key={city.id}>
                        <div>Nama: {city.nama}</div>
                        <div>Luas: {city.luas}</div>
                        <div>Berpantai: {city.berpantai}</div>
                        <p/><p/>
                    </div>
                ) : null;
            })
        }</div>
    )
}

export default Cities