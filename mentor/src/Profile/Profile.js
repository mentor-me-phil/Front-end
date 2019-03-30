import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';

class Profile extends Component {
    render() {
        return (
            <div>
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
