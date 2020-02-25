import React from 'react'
import  { useForm } from 'react-hook-form'



const Contact = () => {
    const { register, handleSubmit, errors } = useForm(); 
    const onSubmit = data => {
      console.log(data);
    }

  return (
    <form
      name="contact" 
      method="POST" 
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
      className="needs-validationcenterBorder formStyle borderBlue" 
      >
    <input type="hidden" name="form-name" value="contact"  />
        <p hidden> 
          <label>Don’t fill this out:<input name="bot-field"/> </label>
        </p>

        <p>
          <label>Your First Name:<input type="text" className="form-control" name="firstname"
          ref={register({ required: true, maxLength: 20 })}/>
          {errors.firstname && 'First name is required.'}</label>  
          <div class="valid-feedback">
        Looks good!
      </div>
        </p>

        <p>
          <label>Your Last Name: <input className="form-control" type="text" name="lastname"
          ref={register({ required: true, maxLength: 20 })} />
          {errors.lastname && 'Last name is required.'}
          </label>  
        </p>

        <p>
          <label>Your Email:<input
          className="form-control"
        name="email"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            
          }
        })}
      />  
      {errors.email && "Invalid email address"}  </label>
        </p>

        <p>
          <label>Message: <input className="form-control" as="textarea" rows="6"name="message"
          ref={register}/> </label>
        </p>

        <p>
        <button className="btn btn-outline-primary" type="submit">Submit</button>
        </p>
    </form>
  )
}


  export default Contact
  