import React from "react";
import './CaedService.css'

const CardService = ({item}) => {
    const {imgUrl} = item;

    return ( 
        <div className=" service_item">
            <div className="service_img">
                <img src={imgUrl} alt="" />
            </div>

        </div>
     );
}

export default CardService;