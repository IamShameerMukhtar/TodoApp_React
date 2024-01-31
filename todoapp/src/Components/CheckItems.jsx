import styles from "./CheckItems.module.css"
const CheckItems=({todoitems})=>{
  return <>
  
  {todoitems.length===0 && <p className={styles.CheckItems}>No work today so, <br></br> Enjoy Your Day!</p>}
  
  
  
  </>


}
export default CheckItems