
import React, { useEffect } from 'react'
import {useState} from 'react'
import './users.css'
import axios from "axios";
import {IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";



const Users = () => {
   
    const [user, setUser]=useState({ID:"",firstName:"", lastName :"",dateOfBirth:"", email :"" })
    const [allUser, setAllUser]=useState([])
    const[toggle, setToggle]=useState(true)
    // const[idno, setIdNo]=useState(0)
    //const [userWithID,setUserWithId]=useState({id:"",firstName:"", lastName :"",dateOfBirth:"", email :"" })
    
    //****** storing input fields in hook user ******/
    let name, value;   
        const handleInputs=(e)=>
        {
             name=e.target.name;
            value=e.target.value;
            setUser({...user,[name]:value});          
        }   

        const getdata=()=>
        {
          axios.get("http://localhost:8080/")
          .then(response => {
           setAllUser(response.data)
                            })      
         .catch(err => {console.log(err)}) 
       console.log("hhhhhhhhhh")
        }

 //****** Showing data on page on first render ******/
        useEffect(()=>
        {

        axios.get("http://localhost:8080/")
        .then(response => {
         
         setAllUser(response.data)
         }).catch(err => {console.log(err)}) 
            
  },[]);



  //****** Call POST API    ******/
  
    const postData = async(event) =>
        {
console.log("postdata")

const final={ firstName:user.firstName, lastName :user.lastName,dateOfBirth:user.dateOfBirth, email :user.email}
          event.preventDefault();
          await axios.post("http://localhost:8080/Students",final)
          .then(response => {
        
                })
         .catch(err => {console.log(err)})          
         setUser({ID:"",firstName:"", lastName :"",dateOfBirth:"", email :"" })
         getdata();
        getdata();    
        }





 // *****  DELETE USER  ********//    

     const deleteUser=(del)=>
            {               
               axios.delete(`http://localhost:8080/Students/${del}`)
               getdata();
               getdata();                        
          }


// ******* FILL USER FORM TO UPDATE ******** //
  
 const FillUserForm=(i,a,b,c,d)=>
          {
           setUser({ID:i,firstName:a, lastName :b,dateOfBirth:c, email :d })
           setToggle(false)
            }
  
  // *****  UPDATE USER  ********//    

          const updateUser=()=>
          {           
             const final={ firstName:user.firstName, lastName :user.lastName,dateOfBirth:user.dateOfBirth, email :user.email}
             axios.put(`http://localhost:8080/Students/${user.ID}`,final,{headers: { contentType : 'application/json' }})
              setUser({ID:"",firstName:"", lastName :"",dateOfBirth:"", email :"" })
               getdata();
               getdata(); 
          }
       


           
    return (
      
       <>
        <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>User Information</h2>
            <div class="underline-title"></div>
          </div>
          <div class="form">            
             <label className='lable1'>First Name  </label>
           <input id="user-email" class="form-content"  autocomplete="off" required name="firstName" value={user.firstName} onChange={handleInputs}/>
            <div class="form-border"></div>
            
            <label className='lable1'>Last Name</label>            
            <input id="user-password" class="form-content"   required name="lastName" value={user.lastName} onChange={handleInputs}/>
            <div class="form-border"></div>
            
            <label className='lable1'>Date of birth  </label>
            <input  type="date" id="user-email" class="form-content"  autocomplete="off" required name="dateOfBirth" value={user.dateOfBirth} onChange={handleInputs}/>
          
            <div class="form-border"></div>
            
            <label className='lable1'>Email </label>
           <input id="user-email" class="form-content"  autocomplete="off" required name="email" value={user.email} onChange={handleInputs}/>
            <div class="form-border"></div>
           {
             toggle ?<input id="submit-btn" type="submit" name="submit" value="SAVE"  onClick={postData}/>:
           
              <input id="submit-btn" type="submit" name="submit" value="UPDATE"  onClick={updateUser}/>
             }  
         
          </div>
        </div>
      </div>
<div className='rightframe'>
<div className='rowtitle'>
  <ul>
  <li>First name</li>
    <li>Last name</li>
    <li>Date of birth</li>
    <li>Email of User</li>
    {/* <li className='icon' onClick={()=>{deleteUser("Abhinav")}}><IoTrashOutline/></li> */}
    <button >---------------Actions--------------</button> 
    </ul></div>
  
  { allUser.map((itemval)=>{  
    return ( <ul className='newlist'>
    <li> {itemval.firstName}</li>
    <li> {itemval.lastName}</li>
    <li> {itemval.dateOfBirth}</li>
    <li> {itemval.email}</li>
   
    <li className='icon'  onClick={()=>{deleteUser(itemval._id)}}><IoTrashOutline/></li> 
     <li className='icon' onClick={()=>{ FillUserForm(itemval._id,itemval.firstName,itemval.lastName,itemval.dateOfBirth,itemval.email)}}><FiEdit/></li>
     
       </ul>  
         )
           })  } 
    </div>
   </>    
    )
}

export default Users
