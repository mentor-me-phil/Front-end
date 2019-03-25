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
                        id=""
                        placeholder='usernane'
                    />
                 </FormGroup>
                 </Col>
                 <Col>
                    <Formgroup>
                        <Label for='password'>Password</Label>
                        <Input
                            type='password'
                            name='password'
                            id=''
                            placeholder='password'
                         />
                    </Formgroup>
                 </Col>
                 <Col>
                 <FormGroup>
                     <Label>Name</Label>
                     <Input 
                        type='name'
                        name='name'
                        id=""
                        placeholder='nane'
                    />
                 </FormGroup>
                 </Col>
                 <Col>
                 <FormGroup>
                     <Label>Email</Label>
                     <Input 
                        type='email'
                        name='email'
                        id=""
                        placeholder='email'
                    />
                 </FormGroup>
                 </Col>
                 <Col>
                 <FormGroup>
                     <Label>Role</Label>
                     <Input 
                        type='role'
                        name='role'
                        id=""
                        placeholder='role'
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