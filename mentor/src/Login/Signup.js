import React, { Component } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "react-strap";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    email: "",
    role: ""
  };

  handleChange = e => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    this.props.register
  };

  render() {
    return (
      <Container className="login">
        <h2>Sign Up</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="username"
                name="username"
                placeholder="usernane"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <Formgroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChnage}
              />
            </Formgroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="name"
                name="name"
                placeholder="nane"
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

export default Signup;
