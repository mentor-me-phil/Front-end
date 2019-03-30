import React from 'react';
import { Form } from 'reactstrap';

class Answers extends React.Component {
    state = {
        answer: ''
    }
    
    componentDidMount() {
        this.props.addAnswers();
    }

    addAnswers = e => {
        e.preventDefault();
        this.props.addAnswers();
    }

    render() {
        return(
        <Form onSubmit={this.addAnswers}>
            <input
            type='text'
            name='answers'
            placeholder='Add answer here'
            />
        </Form>
        )
    }
}

export default Answers;