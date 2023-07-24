import React from "react";
import '../style/home.css'
import {Container, Row,Col} from 'reactstrap'
import supper01 from '../assets/images/hero-img01.jpg'
import supper02 from '../assets/images/hero-img02.jpg'
import supper03 from '../assets/images/supper-03.jpg';
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle'


import Search from '../shared/SearchBar/searchBar'
import FeaturedToursList from "../components/Featured-tours/FeaturedToursList";
import MasonryImageGallery from "../components/Image-gallery/MasonryImagesGallery";
import Newsletter from "../shared/Newsletter/Newsletter";
const   Home = () => {
    
    return <>
        <section>
            <Container>
                <Row>
                    <Col lg='5' className="supper-content">
                        <div className="hero_content">
                            <div className="hero_subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Know Before You Go'}/>
                                 <img src={worldImg} alt=""/>
                            </div>
                           <h1>
                                Quảng Bình
                            </h1>
                            <p>
                            Quảng Bình không chỉ có gió Lào, cát trắng, khí hậu vô cùng khắc nghiệt mà còn được biết đến bởi 
                          những danh lam thắng cảnh mà thiên nhiên đã ưu đãi ban tặng cho người dân Quảng Bình.
                        
                        
                            </p>
                        </div>
                    </Col>
                    
                    <Col lg='2'>
                        <div className="hero_img-box">
                            <img src={supper01} alt="" />
                        </div>
                    </Col>
                    <Col lg='3'>
                        <div className="hero_img-box mt-4">
                            <img src={supper03} alt="" controls/>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero_img-box mt-5">
                            <img src={supper02} alt="" />
                        </div>
                    </Col> 
                    <Search/>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                     <Col lg='8' className="videocontent">
                     
                     </Col>
                     <Col lg='4'>
                        <h5 className="services_subtitle">What we serve</h5>
                        <h5 className="services_title"> We offer our best serveces</h5>
                     </Col>
                     {/* <ServiceList/> */}
                </Row>
            </Container>
        </section>
        <section>
            <Container>
            <Row>
                <Col lg='12' className="p-3 d-flex justify-content-center">
                <h5 className="services_subtitle">Tour nổi bật <div className="line "></div></h5>
                </Col>
                <FeaturedToursList/>
            </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="d-flex justify-content-center">
                            <h5 className="services_subtitle">Khoảnh khắc <div className="line "></div></h5>
                    </Col>
                    <Col lg='12' >
                        <MasonryImageGallery/>
                    </Col>
                </Row>
            </Container>
        </section>
        <Newsletter/>
    </>
}

export default Home;