import React from 'react';
import { Form, Input } from 'react-strap';

const Answers = () => {
    return(
         <div className='answer'>
            <h3>Answers</h3>
            <Form onSubmit={this.addAnswers}>
                <Input
                type='text'
                name='answers'
                placeholder='Add answer here'
                />
            </Form>
        </div>
        )
}

export default Answers;