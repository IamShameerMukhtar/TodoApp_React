import Todoitem from "./Todoitem"
const Todoitems=({todoitems}) =>{
  return <>
  
  <div>
    
    {todoitems.map(items=><Todoitem todoName={items.todoName} todoDate={items.todoDate} ></Todoitem>)}
  
  

</div>
  </>


}
export default Todoitems