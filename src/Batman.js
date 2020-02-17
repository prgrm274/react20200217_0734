import React, {Component} from "react";

class Batman extends Component {
    render() {
        console.log(this.props);

        return(
            <div className="bat">
                <div>Nama: Ryu</div>
                <div>Umur: 30</div>
                <div>Pekerjaan: Architect</div>
            </div>
        )
    }
}

export default Batman