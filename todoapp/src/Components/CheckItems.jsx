import styles from "./CheckItems.module.css"
const CheckItems=({todoitems})=>{
  return <>
  
  {todoitems.length>0 && <p className={styles.CheckItems}>Enjoy Your Day!</p>}
  
  
  
  </>


}
export default CheckItems