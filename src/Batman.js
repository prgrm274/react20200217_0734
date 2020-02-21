import React, {Component} from "react";

class Batman extends Component {
    render() {
        // console.log(this.props);

        const {nama, umur, kerja} = this.props;

        return(
            <div className="bat">
                {/*<div>Nama: Ryu</div>*/}
                <div>Nama: {nama}</div>
                <div>Umur: {umur}</div>
                <div>Kerja: {kerja}</div>
            </div>
        )
    }
}

export default Batman