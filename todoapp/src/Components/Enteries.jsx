function Enteries({handleOnClick,handleOnChange}){
return <div class="container text-center">

<div className="row kgrow">
  <div className="col-6"><input type="text"placeholder="Enter Todo here" onChange={handleOnChange} ></input></div>
  <div className="col-4"><input type="date"></input></div>
  <div className="col-2"><button type="button" className="btn btn-success kg-button"
  onClick={handleOnClick}
  
  >Add</button></div>
</div>
</div>







}
export default Enteries