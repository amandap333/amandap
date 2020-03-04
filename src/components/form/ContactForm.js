import React from 'react'
import  { useForm } from 'react-hook-form'



const Contact = () => {
    const { register, handleSubmit, errors, reset } = useForm({
      mode: 'onChange',
    })
  
    const onSubmit = (data, e) => {
      e.preventDefault()
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...state,
        }),
      })
        .then(response => {
          setFeedbackMsg(` I'll get back to you soon.`)
          reset()
          console.log(response)
        })
        .catch(error => {
          setFeedbackMsg("The form could not be submitted.")
          console.log(error)
        })
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
          <Form.Label>Your First Name:</Form.Label>
          <Form.Control
            className={
              !JSON.stringify(formState.touched.name)
              &&
              !errors.firstname
              ?
                ""
              :
                JSON.stringify(formState.touched.firstname)
                &&
                !errors.firstname
                ?
                  "is-valid"
                :
                  "is-invalid"
            }
            type="text"
            name="firstname"
            onChange={handleChange}
            ref={register({ required: true, maxLength: 25 })}
          />
          {errors.firstname && errors.firstname.type === 'required' &&
            <Form.Control.Feedback type="invalid">
              Please provide a name.
            </Form.Control.Feedback>
          }
        </p>

        <p>
          <label>Your Last Name: <input className="form-control" type="text" name="lastname"
          ref={register({ required: true, maxLength: 20 })} />
          {errors.lastname && 'Last name is required.'}
          </label>  
        </p>

        <p>
          <label>Your Email:<input
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
  