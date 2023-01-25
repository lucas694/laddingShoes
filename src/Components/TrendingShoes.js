import "./TrendingShoes.css"
import TrendingBg from "../assets/TrendingBg.png"
import AirJordan from "../assets/NikeAirJordan.png"

const TrendingShoes = () => {
  return(
    <div className={"TrendingContainer"}>
      <div className={"TrendingContent"}>
        <div className={"TrendingLeft"}>
          <img src={TrendingBg} alt={"Trending Shoes"} className={"TrendingImg"}/>
          <img src={AirJordan} alt={"Air Jordan"} className={"AirJordan"}/>

        </div>
        <div className={"TrendingRight"}>
          <h1 className={"TrendingTitle"}>trending shoes of the day</h1>
          <p className={"TrendingDesc"}>At Vansh, each shoe is built with authentic German Technology that uses Injection Molding techniques. This process ensures that each shoe looks, feels and stays flawless for a long period of time.</p>
          <button className={"TrendingButton"}>Start</button>
        </div>

      </div>
    </div>
  )
};export default TrendingShoes;