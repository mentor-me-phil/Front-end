import React from 'react';
import { Form } from 'react-strap';

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
         <div className='answer'>
            <h3>Answers</h3>
            <Form onSubmit={this.addAnswers}>
                <input
                type='text'
                name='answers'
                placeholder='Add answer here'
                />
            </Form>
        </div>
        )
    }
}

export default Answers;