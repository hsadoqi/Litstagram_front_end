import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react'
import './Signup.css'
import axios from 'axios'

const USERS_URL = 'http://localhost:3000/api/v1/users'

export default class Signup extends Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // confirm password
        axios.post(USERS_URL, {first_name: this.state.firstName, last_name: this.state.lastName, username: this.state.username, password: this.state.password})
        .then((user) => this.props.history.push(`/${(Number(user.data.data.id))}/profile`))
    }


    render(){
        return (
            <div className="login-form">
                <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' name="firstName"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name'name="lastName" />
                    </Form.Field>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='Username' name="username"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' name="password"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm Password</label>
                        <input placeholder='Confirm Password' name="confirmPassword"/>
                    </Form.Field>
                        <Button type='submit' className="login-button">Submit</Button>
                </Form>
            </div>
        )
    }
}