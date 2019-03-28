import React, { Component } from 'react';
import {  Form, Input } from 'reactstrap';

class Questions extends Component {
    state = {
        questions: '',
        ansswers: ''
    }

    handleSubmit = e => {
        this.setState({
            questions: e.target.value,
            answers: e.target.value
        })
    }

    getAnswers = e => {
        e.preventDefault();
        this.props.getAnswers
    }

    render() {
        return (
            <Form>
                <div>
                    <h2>Questions</h2>
                    {this.props.questions.map((question, i) => <Questions key={i} />)}
                    <Input type='text' placeholder='Questions here...' />
                    <Answers />
                </div>
            </Form>
        )
    }
}

export default Questions;
