import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Questions extends Component {
    state = {
        questions: ''
    }

    handleChange = e => {
        console.log(e)
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        console.log(this.state)
        e.preventDefault();
    }
    render() {
        return (
            <div>
              <h2>Questions</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
     addingSmurf: state.addingSmurf
    }
  }
  export default connect(mapStateToProps, {addSmurf})(SmurfForm)

export default Questions;
