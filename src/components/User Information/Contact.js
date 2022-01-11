import React, {useState} from 'react'
import { Component } from 'react';
import { render } from 'react-dom';
import "../CSS/contact.css";
import contact from '../images/contact/contact.png'
import facebook from '../images/contact/facebook.png'
import whatsapp from '../images/contact/whatsapp.png'
import messanger from '../images/contact/messanger.png'
import man from '../images/contact/man.png'
import{ useHistory} from 'react-router-dom'
import thankyou from '../images/contact/thankyou.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FcMenu,FcBusinessman,FcServices, FcHome,FcContacts,FcInternal,FcNews,FcTreeStructure,FcUnlock,FcGallery,FcVoicePresentation,FcFlashAuto} from "react-icons/fc";
import { 
   
   faAngleDoubleRight,
   faVoicemail
   
  
    
} from '@fortawesome/free-solid-svg-icons'
import { 
   
} from '@fortawesome/free-brands-svg-icons';



const Contact = () => {
    const [isActive, setActive] = useState(false);
  
 

  const toggleClass = () => {
    setActive(!isActive);
   
   
  };
    const history=useHistory();
const [user, setUser]=useState({
    fname:"", email :"",phone:"", message :"" })
    let name, value;
    const handleInputs=(e)=>
    {
        console.log(user)
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
const postData=async(e)=>
{
e.preventDefault()
const{fname, email ,phone, message }=user
const res=await fetch("/register", {
    method:"POST",
    headers:{
        "content-Type":"application/json"
    },
    body: JSON.stringify({
        fname, email ,phone, message 
    })
})
 const data =await res.json();
if(data.status===422||!data)
{
    window.alert("invalid registration");
    console.log("invalid registration")
}else{
    
    console.log("Registration successfull")
    toggleClass()
// history.push("/login") it is to direct to login page after registration
}
}
    return (
        <>
        <div className="contact-pic-class"><img src={contact} className="contact-pic-top"/></div>
        <div className="main-div">
            <div className="left-frame">
                <div className="contact-info">
                <div className="contact-information">Contact Information</div>
                <div className="contact-statement">Fill up the form and i will get back to you within 24 hours</div>
                </div>
               
                <div className="three-logoes">
                    <div className="facebook-div"><a href="https://www.facebook.com/rathore1230456/"><img src={facebook} className="contact-pic"/></a></div>
                    <div className="whatsapp-div"><a href="https://chatwith.io/s/6196c24e77b66"><img src={whatsapp} className="contact-pic"/></a></div>
                    <div className="messanger-div"><a href="https://m.me/rathore1230456"><img src={messanger} className="contact-pic"/></a></div>
                </div>
                <div className="email-phone-main">
                    <div className="phone"><i class="material-icons">call</i>+91-9570452922</div>
                    <div className="email"><i class="material-icons">mail_outline</i>abhinavbgp@gmail.com</div>
                </div>
            </div>



            <div className={isActive ? 'middle-frame-gayab': 'middle-frame'}> 
            <form method="POST">
           
           <div className="contact-fill">

               <div className="form-name-row1">
               
               <div className="please-fill-the-form-text">Please fill the form to contact us </div>
               
               <div className="Fname"> <i class="material-icons">person_add</i><input type="text" id="fname" className="textbook" placeholder=" Enter your first name" autoComplete="off" name="fname" value={user.fname} onChange={handleInputs}></input></div>
               
               <div className="Fname"> <i class="material-icons">email</i><input type="text" className="textbook" placeholder="Enter your Email" autoComplete="off" name="email" value={user.email} onChange={handleInputs}></input></div>
               <div className="Fname"> <i class="material-icons">ring_volume</i><input type="text" className="textbook" placeholder="Enter your phone number" autoComplete="off" name="phone" value={user.phone} onChange={handleInputs}></input></div>
               
                </div>
              

               <div className="message-box"><div><i class="material-icons">message</i> Message </div>
               <div><textarea className="messagebook" placeholder="Enter your message "  name="message" value={user.message} onChange={handleInputs}></textarea></div>
               </div>

           <div><button type="submit" onClick={postData} placeholder="Send Message" className="send-button"><span>Send </span><FontAwesomeIcon icon={faAngleDoubleRight} /></button></div>
          
           </div>
            </form>
            </div>

            <div className={isActive ? 'middle-frame-hide-hide': 'middle-frame-hide'}> 
                      {console.log("isActive")}
          

               
                <div className="contact-pic-class-hide"><img src={thankyou} className="contact-pic-top-hide"/></div>
               <div className="please-fill-the-form-text-hide"> For your time and information !</div>
              
               <div className="explore-hide">To explore more go to <span className="icon-hide"><a href="./">home page</a></span> </div>
               
                        
        
          
             </div>
            

           <div className="right-frame">
           <a href="http://m.me/rathore1230456">
 <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14432.650293143044!2d86.99243475!3d25.265116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f03774f6444faf%3A0xc59a271653c66815!2sDr%20Mithilesh%20Clinic!5e0!3m2!1sen!2sin!4v1634666293236!5m2!1sen!2sin" ></iframe> </a>
            </div>

        
        </div>
        </>
    )
}

export default Contact
