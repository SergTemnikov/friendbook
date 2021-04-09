import preloader from "../../../assets/images/Spinner-1s-200px.svg";
import React from "react";

let Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt='loading'/>
        </div>
    )
}
export default Preloader;