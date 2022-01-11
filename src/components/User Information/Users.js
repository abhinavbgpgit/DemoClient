import React from 'react'
import {useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './users.css'
const Users = () => {
    const [startDate, setStartDate] = useState("");
    const [user, setUser]=useState({
        fname:"", lname :"",bday:"", email :"" })
        let name, value;
       
        const handleInputs=(e)=>
        {
            console.log(user)
            name=e.target.name;
            value=e.target.value;
            setUser({...user,[name]:value});
        }
        const postData=(e)=>
        {
            console.log("hmm")
            setUser({fname:"", lname :"",bday:"", email :""});
            setStartDate("")
        }
       

    return (

        <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>User Information</h2>
            <div class="underline-title"></div>
          </div>
          <div class="form">
            
             <label className='lable1'>First Name  </label>
           <input id="user-email" class="form-content"  autocomplete="off" required name="fname" value={user.fname} onChange={handleInputs}/>
            <div class="form-border"></div>
            
            <label className='lable1'>Last Name</label>            
            <input id="user-password" class="form-content"   required name="lname" value={user.lname} onChange={handleInputs}/>
            <div class="form-border"></div>
            
            <label className='lable1'>Date of birth  </label>
           <input id="user-email" class="form-content"  autocomplete="off" required name="bday" value={user.bday} onChange={handleInputs}/>
           <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <div class="form-border"></div>
            
            <label className='lable1'>Email  </label>
           <input id="user-email" class="form-content"  autocomplete="off" required name="email" value={user.email} onChange={handleInputs}/>
            <div class="form-border"></div>
           
            <input id="submit-btn" type="submit" name="submit" value="SAVE" onClick={postData}  />  
             
          </div>
        </div>
      </div>















        // <div className='card'>
        //  <div>  First Name : 
        //    <input type="text"></input> 
        //    </div>
        //    <div>  Last Name : 
        //    <input type="text"></input> 
        //    </div>
        //    <div>  Date of birth : 
        //    <input type="text"></input> 
        //    </div>
        //    <div>  Email : 
        //    <input type="text"></input> 
        //    </div>
        // </div>
    )
}

export default Users
