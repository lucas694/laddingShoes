import "./Header.css"
import HeaderLogo from "../assets/LogoHeader.png"
import {FaBars} from "react-icons/fa";

const Header = () =>{
  return(
    <div className={"HeaderContainer"}>
      <div className={"HeaderContent"}>
        <img src={HeaderLogo} alt={"Logo"} className={"HeaderLogo"}/>
        <ul className={"HeaderUl"}>
          <li className={"LiHeader"}>Home</li>
          <li className={"LiHeader"}>About</li>
          <li className={"LiHeader"}>Gallery</li>
          <li className={"LiHeader"}>Pricing</li>
          <li className={"LiHeader"}>Contact</li>
        </ul>
        <FaBars className={"HeaderBars"}/>

      </div>

    </div>
  )
};export default Header