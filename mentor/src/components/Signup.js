import React, { Component } from 'react'
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
    render() {
        return (
            <Container className='login'>
                <h2>Sign Up</h2>
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
                 <Col>
                 <FormGroup>
                     <Label>Name</Label>
                     <Input 
                        type='name'
                        name='name'
                        placeholder='nane'
                        value=''
                        onChange=''
                    />
                 </FormGroup>
                 </Col>
                 <Col>
                 <FormGroup>
                     <Label>Email</Label>
                     <Input 
                        type='email'
                        name='email'
                        placeholder='email'
                        value=''
                        onChange=''
                    />
                 </FormGroup>
                 </Col>
                 <Col>
                 <FormGroup>
                     <Label>Role</Label>
                     <Input 
                        type='role'
                        name='role'
                        placeholder='role'
                        value=''
                        onChange=''
                    />
                 </FormGroup>
                 </Col>
                  <Button>Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default Signup;