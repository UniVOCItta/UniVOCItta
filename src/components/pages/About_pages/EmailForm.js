import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function EmailForm() {
  const [emailData, setEmailData] = useState({
    to: '',
    from: '',
    subject: '',
    text: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email data:', emailData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="to">
        <Form.Label>To:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={emailData.to}
          onChange={(event) =>
            setEmailData({ ...emailData, to: event.target.value })
          }
          required
        />
      </Form.Group>

      <Form.Group controlId="from">
        <Form.Label>From:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={emailData.from}
          onChange={(event) =>
            setEmailData({ ...emailData, from: event.target.value })
          }
          required
        />
      </Form.Group>

      <Form.Group controlId="subject">
        <Form.Label>Subject:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter subject"
          value={emailData.subject}
          onChange={(event) =>
            setEmailData({ ...emailData, subject: event.target.value })
          }
          required
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={emailData.text}
          onChange={(event) =>
            setEmailData({ ...emailData, text: event.target.value })
          }
          required
        />
      </Form.Group>

      <Button type="submit">Send</Button>
    </Form>
  );
}

export default EmailForm;
