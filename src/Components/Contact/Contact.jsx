import React from "react";
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'


const Contact = () => {

     const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8374b4db-34ca-4700-accf-f7bd3bb9a250");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        alert(res.message);
      }
   
  }
  
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <form onSubmit={onSubmit}>
      <div className="formGroup">
    
        <input type="text" name="name" placeholder="Name" required />
      </div>
      <div className="formGroup">
        
        
        <input type="email" 
        name="email" placeholder="Email" required />
      </div>
      <div className="formGroup">
       
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          required
        ></textarea>
      </div>
      
      <input className="hover btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
