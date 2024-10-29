import React, { useState } from 'react'
import ResisterService from './ResisterService';

function Resister() {
    const [Resister1,setResister]=useState({
        Firstname:"",
        Lastname:"",
        Email:"",
        Contact:'',
        Password:"",
        Confirm_Password:""

    });
    const handleChange=(e)=>{
        const value=e.target.value;
        setResister({...Resister1,[e.target.name]:value});
    
    }


   const RegResister = (e)=>
   {
    e.preventDefault();
    console.log(Resister1);
   ResisterService.saveResister(Resister1)
   .then((res)=>{
    console.log("Resistered Successfully");
   }).catch((error)=>{
    console.log(error);

   })
   }
  return (
  <>
  <div className='container mt-4' >
    <div className='row'>
        <div className='col-md-6 offset-md-3'>
            <div className="card">
                <div className="card-header fs-3 text-centre">Resister</div>
                <div className="card-body">
                    <form action="" onSubmit={(e)=>RegResister(e)}>
                        <div className="md-3">
                            <label>Enter First Name</label>
                            <input type="text" name="Firstname" className='form-control' onChange={(e)=>handleChange(e)}/>

                            <label>Enter Last Name</label>
                            <input type="text" name="Lastname" className='form-control' onChange={(e)=>handleChange(e)}/>
                            <label>Email</label>
                            <input type="text" name="Email" className='form-control' onChange={(e)=>handleChange(e)}/>

                            <label>Contact Number</label>
                            <input type="number" name="Contact" className='form-control' onChange={(e)=>handleChange(e)}/>
                        
                            <div className="md3">
                            <label>Enter Password</label>
                            <input type="text" name="Password" className='form-control' onChange={(e)=>handleChange(e)}/>
                            </div>
                            <div className="md3">
                            <label>Confirm Password</label>
                            <input type="text" name="Confirm_Password" className='form-control' onChange={(e)=>handleChange(e)}/>
                            </div>
                            <button className="btn btn-primary col-md-12 mt-3">Submit</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
  </>
  )
}

export default Resister
