import React, { useRef } from "react";
import { Col,Form,FormGroup } from "reactstrap";

import '../SearchBar/searchBar.css'

const SearchBar = () => {
    const locationRef = useRef('')
    const distanceRef = useRef('')
    const maxGroupSizeRef = useRef('')

    const searchHandler = () =>{
        const location =  locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if(location === " "|| distance === "" || maxGroupSize ===""){
            return alert('all fields are required!')
        }
    }
    return ( 
        <Col lg='12'>
            <div className="search_bar">
                <Form className="d-flex alight-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form_group form_group-last">
                        <span>
                        <i class="ri-map-pin-line"></i>
                        </span>
                        <div>
                           <h6>Location</h6>
                           <input type="text" placeholder="Where are you going?" 
                           ref={distanceRef}/>
                         </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form_group form_group-last">
                        <span>
                        <i class="ri-motorbike-line"></i>
                        </span>
                        <div>
                           <h6>Distance</h6>
                           <input type="number" placeholder="Distance k/m?" ref={distanceRef}/>
                         </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form_group form_group-last">
                        <span>
                           <i className="ri-group-line"> </i>
                        </span>
                        <div>
                           <h6>Max people</h6>
                           <input type="number" placeholder="0" ref={maxGroupSizeRef}/>
                         </div>
                    </FormGroup>
                    <span className="search_icon" type="submit" onClick={searchHandler}>
                        <i className="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
     );
}

export default SearchBar;