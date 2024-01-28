import Todoitem from "./Todoitem"
const Todoitems=({todoName,TodoDate}) =>{
  return <>
  
  <div>
    <Todoitem todoName={todoName} TodoDate={TodoDate} ></Todoitem>
  
  

</div>
  </>


}
export default Todoitems