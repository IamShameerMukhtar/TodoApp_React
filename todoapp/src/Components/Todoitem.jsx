
function Todoitem({todoname,tododate}){
  return <div class="row kgrow">
  <div class="col-6">{todoname}</div>
  <div className="col-4" >{tododate}</div>
  <div className="col-2" ><button type="button" class="btn btn-danger kg-button">Delete</button></div>
  
  </div>
  
  }
  export default Todoitem