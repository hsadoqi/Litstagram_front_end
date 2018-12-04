import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './Login.css'
// import axios from 'axios'

// const USERS_URL = 'http://localhost:3000/users'

class Login extends Component {
    state = {
        username: '', 
        password: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.get(USERS_URL)
    //     .then(user => user.data.data.map((user) => {
    //         if(user.attributes.username === this.state.username && user.attributes.password === this.state.password){
    //             return this.props.history.replace(`/${user.id}/profile`)
    //         } else {
    //             console.log('wrong')
    //             // fix error messages
    //         }
    //     }))
    // }

    render(){

        return (
            <div className="login-form">
                <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='Username' name="username" />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' name='password'/>
                    </Form.Field>
                        <Button type='submit' className="login-button">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Login