import React from 'react';
import './Profile.css'

//material-ui imports 
import { Container, Typography, Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Profile(props) {

    return (
        <div>
            <Container>
                <Link to="/" style={{ textDecoration: "none"}}>
                    <Button style={{ margin: "2%", marginLeft: "-65%" }}>
                        Go Back
                    </Button>
                </Link>
                <Paper elevation={2} style={{ padding: "3%" }}>
                    <div className="header">
                        <img src={props.location.state.avatar} alt="profile pic" className="picture" />
                        <Typography variant="h2" className="name" >{props.location.state.name}</Typography>
                        <Typography variant="h5" className="name" >@{props.location.state.name}</Typography>

                    </div>
                    <div className="body">
                        <Typography variant="h3" >{props.location.state.name}'s Bio</Typography>
                        <div className="bio">
                            <Typography variant="h5">
                                I am a developer working on the MERN stack and looking for full time opportunities
                            </Typography>
                        </div>
                    </div>
                </Paper>
            </Container>
        </div>
    );
}

export default Profile;