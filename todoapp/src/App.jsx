import AppName from './Components/AppName'
import Enteries from './Components/Enteries'


import Todoitems from './Components/Todoitems';
import "./App.css";
import { useState } from 'react';
function App() {
let [todoName,setTodoName]=useState("Buy Milk"); 
let [todoDate,setTodoDate]=useState("4/10/23");

const handleOnClick=()=>{
alert("Clicked");
}

const handleOnChange=(event)=>{
if(event.key==='enter'){}
  let NewItem=event.target.value;
console.log(NewItem)
setTodoName(NewItem)


}
 

 
 
 return<>
 <center className='tudo-container'>
 <AppName></AppName>
  
  <div className="row">
  <Enteries handleOnClick={handleOnClick}
  handleOnChange={handleOnChange}
  
  
  ></Enteries>
  </div>


<Todoitems todoName={todoName}
todoDate={todoDate}
></Todoitems>

 </center> 
 </>
 };

export default App
