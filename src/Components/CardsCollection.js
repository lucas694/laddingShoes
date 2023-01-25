import "./CardsCollection.css"
import BtnBase from "./BtnBase/BtnBase";

const CardsCollection = (props) => {
  return(
    <div className={'CardsContainer'}>
      <div className={"CardsImg"}>
        <img src={props.Img} alt={"Cardimg1"} className={"CardsImg"}/>
      </div>
      <div className={"CardsDesc"}>
        <p>{props.Desc}</p>
        <BtnBase className={"TopCollectionBtn"} BtnText={"Explore"}/>
      </div>
    </div>
  )
};export default CardsCollection;