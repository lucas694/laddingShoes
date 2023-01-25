import "./BtnBase.css"

const BtnBase = (props) => {
  return(
    <>
      <button className={props.className} onClick={props.onClick}>{props.BtnText}</button>
    </>
  )
};export default BtnBase