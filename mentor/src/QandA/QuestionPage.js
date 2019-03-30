import React from 'react';
import { Form, Input } from 'reactstrap';
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

    getAnswers = e => {
        e.preventDefault();
        this.props.getAnswers();
    }

    render() {
        return (
            <Form>
                <div>
                    <h2>Questions</h2>
                    {/* {this.props.question.map((question, i) => <Questions key={i} question={question} />)} */}
                    <Input type='text' placeholder='Questions here...' />
                    {/* {this.props.answers.map((answer, i) => <Answers key={i} answer={answer} /> )} */}
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
