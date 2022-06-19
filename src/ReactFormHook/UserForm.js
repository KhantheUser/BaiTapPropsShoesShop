import React from 'react'


import useForm from './customHook/useForm.js'
function UserForm() {
   
    const {handleChange,handleSubmit,values} = useForm()

   
   
   
  return (
    <form onSubmit={handleSubmit} action="" className='mt-5'>
        <div className='row mb-4'>
            <div className="col-sm-6">
            <div className="form-group">
                <label htmlFor="code" className="form-label" >Identification</label>
                <input value={values.code}  type="text" name="code" id="Code" className="form-control" onChange={handleChange}/>
                <span style={{color:'red',fontSize:'16px'}} className="tbCode" id="tbCode"></span>
            </div>
            </div>
            

            <div className="col-sm-6">
            <div className="form-group">
                <label htmlFor="name"  className="form-label" >Name</label>
                <input value={values.name}  type="text" name="name" id="Name" className="form-control" onChange={handleChange} />
                <span className="tbName" id="tbName" style={{color:'red',fontSize:'16px'}}></span>

            </div>
            </div>


            </div>

            <div className="row">
        <div className="col-sm-6">
             <div className="form-group">
                <label htmlFor="phone"  className="form-label" >Phone number</label>
                <input value={values.phone}  type="text" name="phone" id="Phone" className="form-control" onChange={handleChange} />
                <span style={{color:'red',fontSize:'16px'}} className="tbPhone" id="tbPhone"></span>

            </div>
            </div>
             <div className="col-sm-6">
             <div className="form-group">
                <label htmlFor="email"  className="form-label" >Email</label>
                <input value={values.email}  type="text" name="email" id="Email" className="form-control" onChange={handleChange}/>
                <span style={{color:'red',fontSize:'16px'}} className="tbEmail" id="tbEmail"></span>

            </div>
             </div>   
        </div>
           

<div>

        <button onClick={handleSubmit} style={{width:'100%'}} className="btn btn-success mt-5" >Submit</button>
</div>
       
        
        </form>
  )
}

export default UserForm