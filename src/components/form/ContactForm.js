import React from 'react'



const ContactForm = () => {
  return (

    <form 
    name="contact" 
    method="POST" 
    data-netlify="true"
    data-netlify-honeypot="bot-field"

    >
      <input type="hidden" name="form-name" value="contact"  />
      <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field"/>
          </label>
        </p>
        <p>
          <label>Your First Name: <input type="text" name="firstname" /></label>  
        </p>
        <p>
          <label>Your Last Name: <input type="text" name="lastname" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
    </form>
  )
} 

  export default ContactForm
  