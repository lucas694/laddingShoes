import "./TopCollection.css"
import TopCollectionSpan from "../assets/Rectangle 8.png"
import CardsCollection from "./CardsCollection";
import CardImg1 from "../assets/Cardimg1.png"
import CardImg2 from "../assets/Cardimg2.png"
import CardImg3 from "../assets/Cardimg3.png"

const TopCollection = () => {
  const CardsData =[
    {id:1, img: CardImg1, desc: "Mid Vulcanized logo-appliquéd"},
    {id:2, img: CardImg2, desc: "Mochi White Casual Sneakers"},
    {id:3, img: CardImg3, desc: "Mochi Blue Casual Walking Shoes"},
  ]
  return(
    <div className={"TopCollectionContainer"}>
      <span >
        <h1 className={"TopCollectionTitle"}>Top Collection</h1>
        <img src={TopCollectionSpan} alt={"TopCollectionSpan"} className={"TopCollectionSpanImg"}/>
      </span>
      <div className={"CardsSection"}>
        {CardsData.map((item) => {
          return(
            <CardsCollection Img={item.img} Desc={item.desc}/>
          )
        })}
      </div>
    </div>
  )
};export default TopCollection;