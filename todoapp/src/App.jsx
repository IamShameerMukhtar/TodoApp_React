import AppName from './Components/AppName'
import Enteries from './Components/Enteries'


import Todoitems from './Components/Todoitems';
import "./App.css";
import { useState } from 'react';
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
const handleNewItem=(todoName,todoDate)=>{



}
 

 

 
 
 return<>
 <center className='tudo-container'>
 <AppName></AppName>
  
  <div className="row">
  <Enteries 
  handleNewItem={handleNewItem}
  
  ></Enteries>
  </div>


<Todoitems todoitems={todoitems}

></Todoitems>

 </center> 
 </>
 };

export default App
