
function Todoitem({todoName,todoDate}){
  return <div className="row kgrow">
  <div className="col-6">{todoName}</div>
  <div className="col-4" >{todoDate}</div>
  <div className="col-2" ><button type="button" className="btn btn-danger kg-button">Delete</button></div>
  
  </div>
  
  }
  export default Todoitem