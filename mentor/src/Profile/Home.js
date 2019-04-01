import React, { Component } from 'react';
import Profile from './Profile';

class Mentors extends Component {
    render() {
        return (
            <div className='home'>
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
            </div>
        )
    }
}

export default Profile;