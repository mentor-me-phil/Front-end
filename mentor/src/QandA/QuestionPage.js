import React from 'react';
import { Form, Input } from 'react-strap';
import { getAnswers } from '../actions';
import Answers from './Answers';
import Questions from './Questions';
import { connect } from 'react-redux';

class QuestionPage extends React.Component {
    state = {
        questions: [],
        answers: []
    }

    handleSubmit = e => {
        this.setState({
            questions: e.target.value,
            answers: e.target.value
        })
    }
    
    getQuestions = e => {
        e.preventDefault();
        this.props.getQuestions();
    }

    getAnswers = e => {
        e.preventDefault();
        this.props.getAnswers();
    }

    render() {
        return (
            <Form>
                <div>
                    <h2>Questions</h2>
                    <Questions getQuestions={this.getQuestions} />
                    <Answers getAnswers={this.getAnswers} />
                    <Input 
                        type='text' 
                        value={this.state.questions}
                        onChange=''
                        placeholder='Questions here...' />
                </div>
            </Form>
        )
    }
}


const mapStateToProps = state => ({
   questions: state.questions,
   answers: state.answers
})
 

export default connect(mapStateToProps, {getAnswers})(QuestionPage)
