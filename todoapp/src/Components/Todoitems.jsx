import Todoitem from "./Todoitem"
const Todoitems=({todoitems,handleOnDeleteButton}) =>{
  
  
    
  
  
  
  return <>
  
  <div>
    
    {todoitems.map(items=><Todoitem todoName={items.todoName} todoDate={items.todoDate} key= {items.todoName} handleOnDeleteButton={handleOnDeleteButton}></Todoitem>)}
  
  

</div>
  </>


}
export default Todoitems