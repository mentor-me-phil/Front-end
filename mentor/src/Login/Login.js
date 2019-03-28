import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'react-strap';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        console.log(e)
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    login = e => {
        console.log(this.state)
        e.preventDefault();
        this.props.login
    }
    render() {
        return (
            <Container className='login'>
                <h2>Login</h2>
                <Form className='form' onSubnit={this.login}>
                 <Col>
                 <FormGroup>
                     <Label>Username</Label>
                     <Input 
                        type='username'
                        name='username'
                        placeholder='usernane'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                 </FormGroup>
                 </Col>
                 <Col>
                    <Formgroup>
                        <Label for='password'>Password</Label>
                        <Input
                            type='password'
                            name='password'
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                         />
                    </Formgroup>
                 </Col>
                  <Button onClick={this.login}>Submit</Button>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = ({ error, loggingIn}) => ({
    error,
    loggingIn
})

export default connect(mapStateToProps, {handleSubmit})(Login)