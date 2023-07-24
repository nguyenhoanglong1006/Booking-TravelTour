import React from "react";
import galleryImg from "./galleryImg";
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
const MasonryImageGallery = () => {
    return ( 
        <ResponsiveMasonry columnsCountBreakPoints={{ 992: 4}}>
            <Masonry gutter="1rem">
                {
                    galleryImg.map((item, index)=>(
                        <img 
                        className="masonry-img" 
                        src={item} key={index} 
                        alt="" 
                        style={{width: "100%" , height:"70%", display:"block" , borderRadius:"10px"}}/>
                    ))
                }
            </Masonry>
        </ResponsiveMasonry>
     );
}

export default MasonryImageGallery;