
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-section">
        {/* <a href="/">
          <h1>Connectify</h1>
        </a> */}
        <p className="footer-moto">
          Let Connectify propel you towards success 🌺 ,  <br /> fostering a more inclusive😇 and diverse hackathon community🌈
        </p>
        <div className="footer-social">
          <a href="#contactus" className="footer-a">
            <MailIcon className="icons mail" />
          </a>
          <a href="https://github.com/UBA-GCOEN/StichHub" className="footer-a">
            <GitHubIcon className="icons github" />
          </a>
          {/* <a href="https://github.com/UBA-GCOEN/StichHub" className="footer-a">
            <InstagramIcon className="icons insta" />
          </a>
          <a href="https://github.com/UBA-GCOEN/StichHub" className="footer-a">
            <LinkedInIcon className="icons linkedin" />
          </a> */}
          <a href="#" className="footer-a">
            <TwitterIcon className="icons twitter" />
          </a>
        </div>
      </div>
      {/* <hr */}
      <p className="footer-copyRight"> Developed By Team Connectify &copy; {new Date().getFullYear()}</p>
    </div>

  );
};

export default Footer;


