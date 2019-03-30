import React from 'react';
import Profile from './Profile';

const Home = () => {
    return (
        <div className='home'>
         <h2>Mentor</h2>
         {props.profiles.map(profile => <Profile key={} /> )}
        </div>
    )
}