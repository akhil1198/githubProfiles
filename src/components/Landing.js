import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import './Landing.css'
import Header from './Header';
import Body from './Body';

// const useStyles = makeStyles((theme) => ({

// }));

export default function Landing() {
    //   const classes = useStyles();
                                                                            //MOVE THE HEADER AND THE BODY COMPONENTS TO THIS FILE AND MAKE A DIFF COMPONOENT FOR THE PROFILE CARDS TO BE DISPLAYED SINCE ITS REUSABLE
    return (
        <div>
            <Container spacing={3}>
                <div className="main">
                    <div className="paper">
                        <Paper elevation={0}>
                            <div>
                                <Header />                     
                            </div>
                            <div className='body'>
                                <Body />
                            </div>
                        </Paper>
                    </div>
                </div>
            </Container>
        </div>
    );
}