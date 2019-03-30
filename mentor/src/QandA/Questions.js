import React from 'react';
import { getQuestions } from '../actions';
import { connect } from 'react-redux';

class Questions extends React.Component {
    
    componentDidMount() {
        this.props.getQuestions();
    }
    
    render() { 
        return ( 
            <div className='questions-list'>
            {this.props.questions.map(question => 
                <div key={question.id}>
                    <h2>Questions: {this.state.question}</h2>
                </div>
                )}  
            </div>
         );
    }
}

const mapStateToProps = ({ questions }) => ({
    questions: this.state.questions,
 })

 export default connect(mapStateToProps, {getQuestions})(Questions)
