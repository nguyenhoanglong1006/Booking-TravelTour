import React from "react";
import './newsletter.css'

import {Container, Row, Col} from 'reactstrap'
import maleTourist from '../../assets/images/male-tourist.png'
const Newsletter = () => {
    return (
    <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter-content">
                        <h2>Đăng ký ngay để nhận thông tin du lịch hữu ích</h2>
                    </div>
                    <div className="newsletter-input">
                        <input type="email" placeholder="Nhập thông tin email của bạn" />
                        <button className=" btn-newsletter">Đăng ký</button>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter-img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Newsletter;