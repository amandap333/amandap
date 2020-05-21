import React from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


const Contact = () => {
  const { register, handleSubmit, errors, reset, formState } = useForm({
    mode: 'onChange',
  })
const [state, setState] = React.useState({})
const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })
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
    .then( () => {alert("Success!")
    reset()})
    .catch(error => alert(error))
  }
  return (
    <Form
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
              !JSON.stringify(formState.touched.firstname)
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
              Please provide your first name.
            </Form.Control.Feedback>
          }
        </p>

        <p>
          <Form.Label>Your Last Name:</Form.Label>
          <Form.Control
            className={
              !JSON.stringify(formState.touched.lastname)
              &&
              !errors.lastname
              ?
                ""
              :
                JSON.stringify(formState.touched.lastname)
                &&
                !errors.lastname
                ?
                  "is-valid"
                :
                  "is-invalid"
            }
            type="text"
            name="lastname"
            onChange={handleChange}
            ref={register({ required: true, maxLength: 25 })}
          />
          {errors.lastname && errors.lastname.type === 'required' &&
            <Form.Control.Feedback type="invalid">
              Please provide your last name.
            </Form.Control.Feedback>
          }
        </p>

        <p>
          <Form.Label>Your email:</Form.Label>
          <Form.Control
            className={
              !JSON.stringify(formState.touched.email)
              &&
              !errors.email
              ?
                ""
              :
                JSON.stringify(formState.touched.email)
                &&
                !errors.email
                ?
                  "is-valid"
                :
                  "is-invalid"
            }
            type="email"
            name="email"
            onChange={handleChange}
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
            })}
          />
          {/* {errors.email && errors.email.type === 'required' &&
            <Form.Control.Feedback type="invalid">
              Please provide an email.
            </Form.Control.Feedback>
          } */}
        </p>

        <p>
          <Form.Label>Message:</Form.Label>
          <Form.Control
            className={
              !JSON.stringify(formState.touched.message)
              &&
              !errors.message
              ?
                ""
              :
                JSON.stringify(formState.touched.message)
                &&
                !errors.message
                ?
                  "is-valid"
                :
                  "is-invalid"
            }
            as="textarea"
            rows="4"
            name="message"
            onChange={handleChange}
            ref={register({ required: true })}
          />
          {errors.message && errors.message.type === 'required' &&
            <Form.Control.Feedback type="invalid">
              Please provide your message!
            </Form.Control.Feedback>
          }
        </p>

        <p>
        <Button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 " type="submit">Submit</Button>
        </p>
    </Form>
  )
}


  export default Contact
  