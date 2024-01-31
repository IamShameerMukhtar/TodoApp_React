import AppName from './Components/AppName'
import Enteries from './Components/Enteries'


import Todoitems from './Components/Todoitems';
import "./App.css";
import { useState } from 'react';
import CheckItems from './Components/CheckItems';
function App() {
 




  let [todoitems,settodoitems]=useState( [
    {
     todoName:"Buy Milk",
     todoDate:"4/10/2023",
   },
   {
     todoName: "Go to College",
     todoDate: "4/10/2023",
  },
  {
   todoName: "Play Time",
   todoDate: "4/10/2023",
  
  },
  ]); 

const deleteEntry=()=>{

  
}





  const handleNewItem=(todoName,todoDate)=>{
   const newTodoItems=[...todoitems,{
    
     todoName: todoName ,
     todoDate:todoDate}]
     settodoitems(newTodoItems)


}
 
const handleOnDeleteButton=(todoName,todoDate)=>{
   // filter method
   const  newTodoItem = todoitems.filter(item=>item.todoName!==todoName);
   settodoitems(newTodoItem)
     
}
 

 
 
 return<>
 <center className='tudo-container'>
 
 <AppName></AppName>
  <CheckItems todoitems={todoitems}></CheckItems>
  <Enteries handleNewItem={handleNewItem}></Enteries>
   <Todoitems todoitems={todoitems} handleOnDeleteButton={handleOnDeleteButton}></Todoitems>

 </center> 
 </>
 };

export default App
