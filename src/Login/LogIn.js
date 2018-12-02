import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './Login.css'


class Login extends Component {

    render(){
        return (
            <div className="login-form">
                <Form>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='Username' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' />
                    </Form.Field>
                        <Button type='submit' className="login-button">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Login