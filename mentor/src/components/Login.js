import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Login extends Component {
    render() {
        return (
            <Container className='login'>
                <h2>Login</h2>
                <Form className='form'>
                 <Col>
                 <FormGroup>
                     <Label>Username</Label>
                     <Input 
                        type='username'
                        name='username'
                        placeholder='usernane'
                        value=''
                        onChange=''
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
                            value=''
                            onChange=''
                         />
                    </Formgroup>
                 </Col>
                  <Button>Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default Login;