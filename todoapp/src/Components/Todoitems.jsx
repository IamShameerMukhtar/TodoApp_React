import Todoitem from "./Todoitem"
const Todoitems=({todoitems,handleOnDeleteButton}) =>{
  
  
    
  
  
  
  return <>
  
  <div>
    
    {todoitems.map(items=><Todoitem todoName={items.todoName} todoDate={items.todoDate} handleOnDeleteButton={handleOnDeleteButton}></Todoitem>)}
  
  

</div>
  </>


}
export default Todoitems