
function Todoitem({todoName,todoDate}){
  return <div class="row kgrow">
  <div class="col-6">{todoName}</div>
  <div className="col-4" >{todoDate}</div>
  <div className="col-2" ><button type="button" class="btn btn-danger kg-button">Delete</button></div>
  
  </div>
  
  }
  export default Todoitem