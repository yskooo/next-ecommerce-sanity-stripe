import React from 'react';
import { AiFillFacebook,AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Harold Headphones. All rights reserved.</p>
      <p className="icons">
        <AiFillFacebook/>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer