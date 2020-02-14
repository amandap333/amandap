import React, { useState } from 'react'

import axios from 'axios'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'


const ContactForm = (props) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    const url = 'https://pymail.bscs.org/form'

    const data = {
      "email": email,
      "message": message,
      "firstname": firstname,
      "lastname": lastname,
      "sendto": "Amanda Proffit",
      "form_name": "SpecificContactForm"
    }

    try {
      const response = await axios({
        url: url,
        method: 'post',
        data: data
      })

      if (response.status === 200) {
        setLoading(false)
        //setShowAlert(true)
      } else {
        /*TODO:
        * 1. Create errors state variable
        * 2. Show an error Alert if errors is true
        */
        console.log("Not 200")
      }
    } catch (err) {
      console.log(err)
    }

    
  }

  const handleSetEmail = (e) => {
    e.preventDefault()

    const elem = document.getElementById('contact-form-email')
    setEmail(elem.value)
  }

  const handleSetMessage = (e) => {
    e.preventDefault()

    const elem = document.getElementById('contact-form-message')
    setMessage(elem.value)
  }

  const handleSetFirstName = (e) => {
    e.preventDefault()

    const elem = document.getElementById('contact-form-first-name')
    setFirstName(elem.value)
  }

  const handleSetLastName = (e) => {
    e.preventDefault()

    const elem = document.getElementById('contact-form-last-name')
    setLastName(elem.value)
  }

  return (
    <React.Fragment>
      {loading &&
        <Spinner animation="grow" variant="primary" />
      }
      {!loading &&
        <Form method="POST" data-netlify="true">
          <Form.Group controlId="contact-form-email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleSetEmail}
              placeholder="Enter email"
              type="email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="contact-form-first-name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={handleSetFirstName}
              placeholder="First Name"
              type="text"
            />
          </Form.Group>

          <Form.Group controlId="contact-form-last-name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={handleSetLastName}
              placeholder="Last Name"
              type="text"
            />
          </Form.Group>

          <Form.Group controlId="contact-form-message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              onChange={handleSetMessage}
              placeholder="Please Enter a Message!"
              type="text-area"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      }
    </React.Fragment>
  )
}

export default ContactForm
