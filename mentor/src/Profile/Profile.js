import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';
import Navigation from './Navigation';

class Profile extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Card>
                    <CardImg />
                    <CardTitle>{this.username}</CardTitle>
                    <CardText>{this.description}</CardText>
                </Card>
            </div>
        )
    }
}

export default Profile;
