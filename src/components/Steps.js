import React from "react";

class Steps extends React.Component {
    render() {
        const iconStyle = {
            color: "black",
            fontSize : 100
        }
        return(
            <div className="box col-sm-3 col-6">
               <i className="material-icons" style={iconStyle} >directions_walk</i>
            </div>
        )
    }
}

export default Steps