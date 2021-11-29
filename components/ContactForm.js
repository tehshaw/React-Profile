import React from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function ContactForm() {
    
    return (
    
        <Col>

            <form className="mb-4">
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" id="nameField" placeholder="Enter contact name" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" id="emailField" placeholder="Enter email to contact" />
            </div>
            <div className="form-group">
                <label>Message</label>
                <textarea type="text" className="form-control" id="messageField" placeholder="Send a short message!" />
            </div>
            </form>

            <Button
                variant="secondary"
            
            >Send Message to Mike</Button>

    </Col>
    )
}
