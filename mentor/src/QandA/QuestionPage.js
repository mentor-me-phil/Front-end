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

    addAnswers = e => {
        e.preventDefault();
        this.props.addAnswers();
    }

    deletePost = e => {
        e.preventDefault();
        this.props.deletePost();
    }

    render() {
        return (
            <Form>
                <div>
                    <h2>Questions</h2>
                    {this.state.questions.map(() => {
                       return  <Questions />
                    })}
                    {this.state.answers.map(() => {
                       return  <Answers />
                    })}
                    <Input 
                        type='text' 
                        value={this.state.answers}
                        onChange={this.handleSubmit}
                        placeholder='Answers here...' />
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
