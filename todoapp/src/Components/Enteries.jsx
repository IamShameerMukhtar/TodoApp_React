import { useState } from "react"
import { IoIosAdd } from "react-icons/io";
function Enteries({handleNewItem}){

  const [todoName,setTodoName] = useState("");
  const [todoDate,setTodoDate] = useState("");

const handleNameChange=(event)=>{

setTodoName(event.target.value)

}
const handleDateChange=(event)=>{


setTodoDate(event.target.value)
}

const handleAddButtonClicked=()=>{
handleNewItem(todoName,todoDate)
setTodoDate("")
setTodoName("")

}




return <div classna="container text-center">

<div className="row kgrow">
  <div className="col-6"><input type="text"placeholder="Enter Todo here"
   onChange={handleNameChange}
    value={todoName}
    ></input></div>
  
  
  
  
  
  
  <div className="col-4"><input type="date" 
  onChange={handleDateChange} 
  value={todoDate}
  ></input></div>
  
  
  
  
  
  <div className="col-2"><button type="button" className="btn btn-success kg-button"
  onClick={handleAddButtonClicked}
  
  ><IoIosAdd/>
  </button></div>
</div>
</div>







}
export default Enteries