import React from 'react';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';

const Profile = props => {
    return (
            <div>
                <Card>
                    <CardImg />
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.description}</CardText>
                </Card>
            </div>
        )
}

export default Profile;
