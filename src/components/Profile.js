import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import './Landing.css'

function Profile(props) {
    return (
        <div>
             <Container spacing={3}>
                <div className="main">
                    <div className="paper">
                        <Paper elevation={0}>
                            <div>
                                {/* <Header /> */}
                            </div>
                            <div className='body'>
                                {/* <Body /> */}
                            </div>
                        </Paper>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Profile;