import React from 'react';
import './Profile.css'

//package imports 
import { Link } from 'react-router-dom';

//material-ui imports 
import { Container, Typography, Paper, Button } from '@material-ui/core';

function Profile(props) {

    return (
        <div>
            <Container>
                {/* using link from react router dom to move back to the previous page */}
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button style={{ margin: "2%", marginLeft: "-65%" }}>
                        Go Back
                    </Button>
                </Link>
                <Paper elevation={2} style={{ padding: "3%" }}>
                    <div className="header">
                        <img src={props.location.state.avatar} alt="profile pic" className="picture" />
                        <Typography  id="name" >{props.location.state.name}</Typography>
                        <Typography id="username" >@{props.location.state.name}</Typography>
                        <Typography variant="h6" style={{ margin: "1%" }}><a href={props.location.state.gitlink} target="_blank">{props.location.state.gitlink}</a></Typography>
                    </div>
                    <div className="body">
                        <Typography id="bio" >Bio</Typography>
                        <div>
                            <Typography id="details">
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