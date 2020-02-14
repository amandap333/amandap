import React from 'react'
import  { useForm } from 'react-hook-form'


const ContactForm = () => {

  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  };

  return (

    <form 
    name="contact" 
    method="POST" 
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    onSubmit={handleSubmit(onSubmit)}

    >
      <input type="hidden" name="form-name" value="contact"  />
        <p  hidden>
          <label>Don’t fill this out: </label>
          <input name="bot-field"/>
        </p>

        <p>
          <label>Your First Name:<input type="text" name="firstname"
          ref={register({ required: true, maxLength: 20 })}/>
          {errors.firstname && 'First name is required.'}</label>  
        </p>

        <p>
          <label>Your Last Name: <input type="text" name="lastname"
          ref={register({ required: true, maxLength: 20 })} />
          {errors.lastname && 'Last name is required.'}
          </label>  
          
        </p>

        <p>
          <label>Your Email:<input type="email" name="email" 
          ref={register({ required: true })}/>    </label>
        </p>

        <p>
          <label>Message: <textarea name="message"
          ref={register}></textarea> </label>
        </p>

        <p>
          <button type="submit">Send</button>
        </p>

    </form>
  )
} 

  export default ContactForm
  