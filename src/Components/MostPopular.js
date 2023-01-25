import "./MostPopular.css"
import Rectangle13 from "../assets/Rectangle 13.png"
import Rectangle14 from "../assets/Rectangle 14.png"
import Rectangle15 from "../assets/Rectangle 15.png"

const MostPopular = () => {
  return(
    <div className={"MonstPopularContainer"}>
      <h1 className={"MonstTitle"}>Monst Popular</h1>
      <p className={"MonstDesc"}>Here’s Our most popular collection. People tend to love whatever is in here.</p>
      <div className={"MonstContent"}>
        <div className={"MonstLeft"}>
          <ul className={"UlMonst"}>
            <li className={"LiMonst"}>premium collection</li>
            <li className={"LiMonst"}>best minimals</li>
            <li className={"LiMonst"}>crazy shoes</li>
            <li className={"LiMonst"}>ladies shoes</li>
          </ul>
        </div>
        <div className={"MonstRight"}>
          <img src={Rectangle13} alt={"Rectangle13"} className={"MonstImg1"}/>
          <img src={Rectangle14} alt={"Rectangle13"} className={"MonstImg2"}/>
          <img src={Rectangle15} alt={"Rectangle13"} className={"MonstImg3"}/>
        </div>


      </div>
    </div>
  )
}; export default MostPopular;