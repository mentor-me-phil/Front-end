import React from 'react';

const Answers = props => {
    <Form onSubmit={props.getAnswers}>
        <input
            type='text'
            name='answers'
            placeholder='Add answer here'
        />
    </Form>
}

export default Answers;