import Todoitem from "./Todoitem"
const Todoitems=({todoitems}) =>{
  return <>
  
  <div>
    {todoitems.map(items=><Todoitem todoname={items.name} tododate={items.duedate} ></Todoitem>)}
  
  

</div>
  </>


}
export default Todoitems