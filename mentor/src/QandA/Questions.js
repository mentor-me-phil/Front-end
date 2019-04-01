import React from 'react';
import { getQuestions } from '../actions';
import { connect } from 'react-redux';
import { Button } from 'react-strap';

class Questions extends React.Component {
    state = {
        questions: ''
    }
    componentDidMount() {
        this.props.getQuestions();
    }

    getQuestions = e => {
        e.preventDefault();
        this.props.getQuestions();
    }

    deletePost = e => {
        e.preventDefault();
        this.props.deletePost();
    }
    
    render() { 
        return ( 
            <div className='questions-list'>
            {this.props.questions.map(question => 
                <div key={question.id}>
                    <h2>Questions: {this.state.question}</h2>
                </div>
                )}  
                <Button onClick={this.deletePost}>Delete</Button>
            </div>
         );
    }
}

const mapStateToProps = ({ questions }) => ({
    questions: this.state.questions,
 })

 export default connect(mapStateToProps, {getQuestions})(Questions)
