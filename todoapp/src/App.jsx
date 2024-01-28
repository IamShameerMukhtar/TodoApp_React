import AppName from './Components/AppName'
import Enteries from './Components/Enteries'


import Todoitems from './Components/Todoitems';
import "./App.css";
function App() {


  const todoitems=
 [
  {
  name:"Buy Milk",
  duedate:"4/10/2023",
 },
 {
 name: "Go to College",
 duedate: "4/10/2023",
},
{
  name: "Play Time",
  duedate: "4/10/2023",

},
];

 


 
 
 return<>
 <center className='tudo-container'>
 <AppName></AppName>
  <br/>
  <div className="row">
  <Enteries></Enteries>
  </div>

<div>
<Todoitems todoitems={todoitems}></Todoitems>
</div>
 </center> 
 </>
 };

export default App
