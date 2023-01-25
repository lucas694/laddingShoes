import "./Footer.css"
import FooterLogo from "../assets/LogoHeader.png"
import { BsFacebook,BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";



const Footer = () => {
  return(
    <div className={"FooterContainer"}>
      <div className={"FooterContent"}>
        <div className={"FooterLeft"}>
          <img src={FooterLogo} alt={"Logo"} className={"FooterLogo"}/>
          <p className={"FooterDesc"}>Push through the pain Every single day</p>
          <section className={"FooterSocials"}>
            <BsFacebook className={"FooterSocialIcon"}/>
            <BsInstagram className={"FooterSocialIcon"}/>
            <BsTwitter className={"FooterSocialIcon"}/>
            <BsLinkedin className={"FooterSocialIcon"}/>
          </section>
        </div>
        <div className={"FooterRight"}>
          <ul className={"FooterUL"}>
            <h1 className={"FooterTitle"}>Company</h1>
            <li className={"FooterLi"}>About</li>
            <li className={"FooterLi"}>Contact Us</li>
            <li className={"FooterLi"}>Support</li>
            <li className={"FooterLi"}>Careers</li>
          </ul>
          <ul className={"FooterUL"}>
            <h1 className={"FooterTitle"}>Help</h1>
            <li className={"FooterLi"}>Privacy Policy</li>
            <li className={"FooterLi"}>Cookie Policy</li>
            <li className={"FooterLi"}>Terms & Conditions</li>
            <li className={"FooterLi"}>Share Location</li>
          </ul>




        </div>

      </div>
    </div>
  )
};export default Footer;