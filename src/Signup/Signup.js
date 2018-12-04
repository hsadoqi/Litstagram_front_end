import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react'
import './Signup.css'
// import axios from 'axios'

// const USERS_URL = 'http://localhost:3000/api/v1/users'

export default class Signup extends Component {
    state = {
        fullName: '',
        username: '',
        password: ''
    }

    // add confirm password again

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div className="login-form">
                <Form onChange={this.handleChange} onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
                    <Form.Field>
                        <label>Full Name</label>
                        <input placeholder='Full Name' name="fullName"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='Username' name="username"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' name="password"/>
                    </Form.Field>
                        <Button type='submit' className="login-button">Submit</Button>
                </Form>
            </div>
        )
    }
}