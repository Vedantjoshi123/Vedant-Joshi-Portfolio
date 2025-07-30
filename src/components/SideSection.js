// src/components/SideSection.js
import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub, FaPhoneSquareAlt, FaInstagram, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import homeLogo from "../Assets/image-profile.jpeg";
import gfg from '../Assets/social-gfg.svg';

const SideSection = () => {
  return (
    <>
    <div className="side-section">
      <div className="self-profile">
        <img
          src={homeLogo}
          alt="home pic"
          className="img-profile"
          style={{ maxHeight: "150px" }}
        />
        <h2 className="fw-bolder mt-4">Vedant Joshi</h2>
        <p> Full Stack Developer | Java Developer </p>
        <hr></hr>
        <div className="social-component">
          <FaMapMarkerAlt color="#cd5ff8" size={25}/>
          <p><a href="https://maps.app.goo.gl/81rrs1joXecz9Ynn8" className="social-link" target="_blanck"> Chhatrapati Sambhajinagar (Aurangabad)</a></p>
        </div>
        <div className="social-component">
          <IoIosMail color="#cd5ff8" size={25}/>
          <p><a href="mailto:vedantjoshi4406@gmail.com" className="social-link"  target="_blanck" > vedantjoshi4406@gmail.com</a></p>
        </div>
        <div className="social-component">
          <FaPhoneSquareAlt color="#cd5ff8" size={25}/>
          <p><a href="tel:8788615689" className="social-link"  target="_blanck"> 8788615689</a></p>
        </div>
        <div className="social-component">
          <FaLinkedin color="#cd5ff8" size={25}/>
          <p><a href="https://www.linkedin.com/in/joshivedant/" className="social-link"  target="_blanck"> joshivedant</a></p>
        </div>
        <div className="social-component">
          <FaGithub color="#cd5ff8" size={25}/>
          <p><a href="https://github.com/Vedantjoshi123" className="social-link"  target="_blanck"> Vedantjoshi123</a></p>
        </div>
        <div className="social-component">
          <SiLeetcode color="#cd5ff8" size={25}/>
          <p><a href="https://leetcode.com/vedantjoshi4406" className="social-link"  target="_blanck"> vedantjoshi4406</a></p>
        </div>
        <div className="social-component">
          <img src={gfg} color="#cd5ff8" alt="GFG" style={{ width: 25, height: 25 }} />
          <p><a href="https://www.geeksforgeeks.org/user/vedantjoshi4406" className="social-link"  target="_blanck"> vedantjoshi4406</a></p>
        </div>
        <div className="social-component">
          <FaInstagram color="#cd5ff8" size={25}/>
          <p><a href="https://www.instagram.com/ved_joshi_4406?igsh=dWt3cWlycnFyY3Fx" className="social-link"  target="_blanck"> ved_joshi_4406</a></p>
        </div>
        
        <div className="social-component">
          <FaFacebook color="#cd5ff8" size={25}/>
          <p><a href="https://www.facebook.com/vedant.joshi.39566905/" className="social-link"  target="_blanck"> Vedant Joshi </a></p>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default SideSection;
