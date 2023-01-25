import "./Hero.css"
import shoesL from "../assets/ShoesL.png"
import shoesR from "../assets/ShoesR.png"
import BgContent from "../assets/Frame 3.png"
import WomanHero from "../assets/womanHero.png"
import BtnBase from "../Components/BtnBase/BtnBase";

const Hero = () => {
  return(
    <div className={"HeroContainer"}>
      <h1 className={"HeroTitle"}>the new sneakers collection</h1>
      <div className={"HeroContent"}>
        <>
          <img src={BgContent} alt={"BgContent"} className={"BgContent"}/>
          <img src={shoesL} alt={"shoesL"} className={"shoesL"}/>
          <img src={shoesR} alt={"shoesR"} className={"shoesR"}/>
        </>
        <div className={"flex w-full justify-between z-40"}>
          <div className={"HeroLeft"}><h1>At Vansh, each shoe is built with authentic German Technology that uses Injection Molding techniques.</h1></div>
          <div className={"HeroRight"}><h1>Thank you for visiting my site and exploring my work.</h1></div>
        </div>

        <div className={"HeroMain"}>
          <div className={"HeroMainContent"}>
            <BtnBase className={"BtnHero"} BtnText={"Start"}/>
            <img src={WomanHero} alt={"WomanHero"} className={"WomanHero"}/>
          </div>

        </div>
      </div>
    </div>
  )
};export default Hero