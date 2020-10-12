import React, { useState } from 'react';
import './Landing.css'
import Profilecard from './Card';

//material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container, CircularProgress } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//package imports
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '35ch',
            '&:focus': {
                width: '35ch',
            },
        },
    },
}));

export default function Landing() {
    const classes = useStyles();
    const [searchquery, setSearchquery] = useState('')
    const [userData, setUserData] = useState([])
    const [totalResults, setTotalResults] = useState()
    const [loading, setLoading] = useState(false)

    const onChange = (e) => {
        setSearchquery(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setLoading(true)
        const url = `https://api.github.com/search/users?q=${searchquery}&sort=starts&order=desc`       //making api calls to github to fetch user information here
        axios
            .get(url)
            .then(response => {
                console.log(response)
                setTotalResults(response.data.total_count)                      //setting data to states
                setUserData(response.data.items)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const BreakpointHelper = () => {                                            //this is a breakpoint helper function which is triggered when the screen size is below the mentioned size of 450px
        const matches = useMediaQuery("(max-width:600px)");                     //the useMediaQuery is used to check if the screen size is dropping below or increasing above the specified px 

        if (matches) {                              //if the screen size drops to below 600px then the following will be rendered 
            return (
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid container item >
                            {loading === true ?
                                <CircularProgress style={{ marginLeft: "50%" }} />
                                :
                                userData.map((details) => {
                                    return (
                                        <Grid container item >
                                            <Profilecard avatar={details.avatar_url} name={details.login} gitlink={details.html_url} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </div>
            )
        } else {                                        //if the screen size increases above 600px then the following will be loaded
            return (
                <div className={classes.root}>
                    <center>
                        <Grid container spacing={1} justify="center">
                            <Grid container item xs={6} spacing={12}>
                                {loading === true ?
                                    <CircularProgress style={{ marginLeft: "50%" }} />
                                    :
                                    userData.map((details) => {
                                        return (
                                            <Grid container item xs={6} spacing={12}>
                                                <Profilecard avatar={details.avatar_url} name={details.login} gitlink={details.html_url} />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                    </center>
                </div>
            )
        }
    };


    return (
        <div>
            <Container spacing={3}>
                <div className="main">
                    <div className="paper">
                        <Paper elevation={2} style={{ padding: "2%", marginTop: "5%"}}>
                            <div>
                                <div className="header">
                                    <Typography variant="h4" id="headerText" ><GitHubIcon style={{ fontSize: 40, marginRight: "1%", color: "black" }} />GitHub Profile Viewer</Typography>
                                    <form onSubmit={handleSearch}>
                                        <AppBar position="static" id="searchbar">
                                            <Toolbar>
                                                <div className={classes.searchIcon}>
                                                    <SearchIcon />
                                                </div>
                                                <InputBase
                                                    placeholder="Search User"
                                                    classes={{
                                                        root: classes.inputRoot,
                                                        input: classes.inputInput,
                                                    }}
                                                    inputProps={{ 'aria-label': 'search' }}
                                                    onChange={(e) => onChange(e)}
                                                />
                                            </Toolbar>
                                        </AppBar>
                                        {totalResults ?
                                            <Typography variant="h5" id="results" >Total Results : {totalResults}</Typography>
                                            :
                                            null
                                        }
                                    </form>
                                </div>
                            </div>
                            <div >
                                {BreakpointHelper()}
                            </div>
                        </Paper>
                    </div>
                </div>
            </Container>
        </div>
    );
}