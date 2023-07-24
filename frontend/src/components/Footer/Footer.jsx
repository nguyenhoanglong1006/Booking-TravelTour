import React from "react";
import { Container } from "reactstrap";
import logo from '../../assets/images/logo.png'
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { BsFacebook, BsGithub, BsYoutube } from 'react-icons/bs';
import { BiMap } from "react-icons/bi";
import './Footer.css'
const Footer = () => {
    return ( 
        <Container>
            <div className="footer ">
                <div className="logo-footer">
                   <a href="/">
                      <img src={logo}  alt="" />
                  </a> 
                </div>
                <div className="gioithieu">
                    <p >
                        Giới thiệu
                    </p>          
                    <a className='d-flex' href="/">
                        <AiOutlineDoubleRight/>
                           Về công ty
                     </a>
                     <a className='d-flex' href="/">
                        <AiOutlineDoubleRight  />
                           Về quy chế
                     </a>
                     <a className='d-flex ' href="/">
                        <AiOutlineDoubleRight />
                           Về chính sách bảo mật
                     </a>

                </div>
                <div className="gioithieu">
                <p >
                       Hỗ trợ
                    </p>            
                    <a className='d-flex' href="/">
                        <AiOutlineDoubleRight  />
                           Đăng ký tài khoản
                     </a>
                     <a className='d-flex'  href="/">
                        <AiOutlineDoubleRight  />
                           Tư vấn khách hàng
                     </a>
                </div>
                <div className="gioithieu">
                    <p >
                       Liên hệ
                    </p>   
                      <div className="flex">
                         {/* facebook */}
                         <a className="icon" href="/" >
                             <BsFacebook />
                         </a>
                         {/* Github */}
                       <a className="icongit"  href="https://github.com/quanNguyen0872/lq-cineplex-website" >
                          <BsGithub />
                       </a>
                       {/* Youtube */}
                        <a className='iconyt' href="/">
                           <BsYoutube />
                        </a>
                     </div>
                </div>
            </div>
            <div className="line"></div>
            <div className='  diachi'>      
                 <p>
                    <BiMap/> 
                     12 Nguyễn Văn Bảo - phường 4 - Gò Vấp - TP Hồ Chí Minh
                </p>
                  
             </div>
        </Container>
        
     );
}

export default Footer;
