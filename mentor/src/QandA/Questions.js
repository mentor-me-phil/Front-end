import React from 'react';
import { Button } from 'react-strap';

const Questions = (props) => {
    return ( 
        <div className='questions-list'>
            <div key={question.id}>
                <h2>Questions: {PushSubscriptionOptions.question}</h2>
            </div>
            <Button onClick={props.deletePost}>Delete</Button>
        </div>
         );
}

export default Questions;