import React from 'react'



const ContactForm = () => {
  return (
  <form name="contactform" method="POST" netlify>
  <p>
    <label>First Name: <input type="text" name="firstname" /></label>   
  </p>
  <p>
    <label>Last Name: <input type="text" name="lastname" /></label>   
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
  )} 

  export default ContactForm
  