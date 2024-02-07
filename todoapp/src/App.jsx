import AppName from './Components/AppName'
import Enteries from './Components/Enteries'
import { TodoItemsContext } from './store/todo-items-store';

import Todoitems from './Components/Todoitems';
import "./App.css";
import { useState } from 'react';
import CheckItems from './Components/CheckItems';
function App() {
 




  let [todoitems,settodoitems]=useState( [
    
  ]); 





// Add Items

  const handleNewItem=(todoName,todoDate)=>{
  if(todoName.length>=1 && todoDate){
    
     settodoitems((currValue)=>{
      const newTodoItem=[...currValue,{
    
        todoName: todoName ,
        todoDate:todoDate}];
        return newTodoItem;


     })
    
    
    
    }

}
 // Delete items using filter method
const handleOnDeleteButton=(todoName,todoDate)=>{
   // filter method
   const  newTodoItem = todoitems.filter(item=>item.todoName!==todoName);
   settodoitems(newTodoItem)
     
}
 


 
 return<>
 <TodoItemsContext.Provider value={{
  todoitems:todoitems,
  handleNewItem:handleNewItem,handleOnDeleteButton:handleOnDeleteButton}}>
 
 
 <center className='tudo-container'>

 <AppName></AppName>
  <CheckItems></CheckItems>
  <Enteries ></Enteries>
   <Todoitems ></Todoitems>

 </center> 
 </TodoItemsContext.Provider>
 </>
 };

export default App
