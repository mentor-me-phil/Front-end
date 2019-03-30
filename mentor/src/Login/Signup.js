import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import { register } from '../actions';

class Signup extends Component {
  state = {
    newUser: {
      username: "",
      password: "",
      name: "",
      email: "",
      role: ""
   
    }
  };

  handleChange = e => {
    console.log(e);
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    console.log(this.state);
    e.preventDefault();
    this.props.register(this.state.newUser);
  };

  render() {
    return (
      <Container className="login">
        <h2>Sign Up</h2>
        <Form className="form" onSubmit={this.register}>
          <Col>
            <FormGroup>
              <Label>Userame</Label>
              <Input
                type="username"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Fullname</Label>
              <Input
                type="name"
                name="name"
                placeholder="fullname"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Role</Label>
              <Input
                type="role"
                name="role"
                placeholder="role"
                value={this.state.role}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps =  state => ({
  
})

export default connect(mapStateToProps, {register})(Signup)
