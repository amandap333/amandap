import React from 'react'
import  { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const ContactForm = () => {

  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  };

  return (
    <form>
    <Form 
    name="contact" 
    method="POST" 
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    onSubmit={handleSubmit(onSubmit)}
    className="centerBorder formStyle borderBlue"

    >
      <input type="hidden" name="form-name" value="contact"  />
        <p hidden> 
          <label>Don’t fill this out:<input name="bot-field"/> </label>
          
        </p>

        <p>
          <Form.Label>Your First Name:<Form.Control type="text" name="firstname"
          ref={register({ required: true, maxLength: 20 })}/>
          {errors.firstname && 'First name is required.'}</Form.Label>  
        </p>

        <p>
          <Form.Label>Your Last Name: <Form.Control type="text" name="lastname"
          ref={register({ required: true, maxLength: 20 })} />
          {errors.lastname && 'Last name is required.'}
          </Form.Label>  
          
        </p>

        <p>
          <Form.Label>Your Email:<Form.Control
        name="email"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            
          }
        })}
      />  
      {errors.email && "Invalid email address"}  </Form.Label>
        </p>

        <p>
          <Form.Label>Message: <Form.Control as="textarea" rows="3"name="message"
          ref={register}/> </Form.Label>
        </p>

        <p>
          <Button type="submit" class="btn btn-outline-secondary">Send</Button>
        </p>

    </Form>
    </form>
  )
} 

  export default ContactForm
  