import React, { Component } from 'react';
import Profile from './Profile';
import Navigation from './Navigation';
import QuestionPage from './Profile';

class Mentors extends Component {
    render() {
        return (
            <div className='home'>
            <Navigation />
            <h2>Mentors</h2>
            <ul>
                {this.props.profiles.map(profile => {
                return (
                <Profile 
                    name={profile.name}
                    description={profile.description}
                /> 
                );
            })}
            </ul>
            <QuestionPage />
            </div>
        )
    }
}

export default Profile;