
import { TodoItemsContext } from "../store/todo-items-store"
import { useContext } from "react"
import Todoitem from "./Todoitem"



const Todoitems=({handleOnDeleteButton}) =>{
  const Contextobj=useContext(TodoItemsContext)
  const todoitems=Contextobj.todoitems;

  
  
  
  return <>
  
  <div>
    
    {todoitems.map(items=><Todoitem todoName={items.todoName} todoDate={items.todoDate} key= {items.todoName} handleOnDeleteButton={handleOnDeleteButton}></Todoitem>)}
  
  

</div>
  </>


}
export default Todoitems