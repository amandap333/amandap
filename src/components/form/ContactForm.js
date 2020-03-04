import React, { useState } from 'react'
import  { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const Contact = () => {
    const { register, handleSubmit, errors, reset, formState } = useForm({
      mode: 'onChange',
    })
    const [setFeedbackMsg] = useState(null)
    const [state, setState] = React.useState({})
    const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })
  const onSubmit = (data, e) => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        // 'form-name': form.getAttribute('name'),
        'form-name': 'contact',
        ...state,
      }),
    })
      .then(response => {
        setFeedbackMsg(`Thanks for reaching out. I'll get back to you soon.`)
        reset()
        console.log(response)
      })
      .catch(error => {
        setFeedbackMsg("Oops, something went wrong. The form could not be submitted.")
        console.log(error)
      })
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
              Please provide a first name.
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
              Please provide a last name.
            </Form.Control.Feedback>
          }
        </p>

        <p>
          <Form.label>Message: </Form.label><Form.Control className={
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
              Please provide a message.
            </Form.Control.Feedback>
          }

        </p>

        <p>
          <Form.Label>Your Email:</Form.Label>
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
            ref={register({ required: true,     pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
        {errors.email && errors.email.type === 'required' &&
          <Form.Control.Feedback type="invalid">
            Please provide your email address.
          </Form.Control.Feedback>
        }
        </p>

        <p>
        <Button className="btn btn-outline-primary" type="submit">Submit</Button>
        </p>
    </Form>
  )
}


  export default Contact
  