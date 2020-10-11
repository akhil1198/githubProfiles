import React, { useState } from 'react';
import './Landing.css'
import Profilecard from './Card';

//material-ui imports
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Container, Box, Button, CircularProgress } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
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
    const [avatar, setAvatar] = useState()
    const [name, setName] = useState()
    const [gitlink, setGitlink] = useState()
    const [followers, setFollowers] = useState()
    const [following, setFollowing] = useState()
    const [totalResults, setTotalResults] = useState()
    const [loading, setLoading] = useState(false)

    const onChange = (e) => {
        console.log(e.target.value)
        setSearchquery(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setLoading(true)
        const url = `https://api.github.com/search/users?q=${searchquery}&sort=starts&order=desc`
        axios
            .get(url)
            .then(response => {
                // setLoading(true)
                console.log(response)
                setTotalResults(response.data.total_count)
                let users = []


                // response.data.items.forEach((data) => {
                //     // console.log(data)
                //     // setName(data.login)
                //     // setAvatar(data.avatar_url)
                //     // setGitlink(data.html_url)

                //     console.log(data)
                //     setLoading(false)
                //     users.push(data)
                // })
                // setUserData(users)

                setUserData(response.data.items)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    console.log(userData)
    // console.log(totalResults)



    // const matches = useMediaQuery("(min-width:450px)");

    const BreakpointHelper = () => {                                            //this is a breakpoint helper function which is triggered when the screen size is below the mentioned size of 450px
        const theme = useTheme();
        // const matches = useMediaQuery(theme.breakpoints.up("sm"));              //threme.breakpoints.up("sm") is creating the breakpoint based upon the helpers set by materialUI so anything that is greated than sm which has a predefined size of 600px then it will render for bigger screen sizes
        const matches = useMediaQuery("(max-width:600px)");

        if (matches) {                              //below 600px
            return (
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid container item >


                            {loading === true ?
                                <CircularProgress />
                                :
                                userData.map((details) => {
                                    return (
                                        <Grid container item >
                                            <Profilecard avatar={details.avatar_url} name={details.login} />
                                        </Grid>
                                    )
                                })
                                // userData.map((details) => {
                                //     console.log(details)
                                // })
                                // console.log(typeof(userData))
                                // <Grid container item xs={6} spacing={12}>
                                //      <Profilecard data={userData} />
                                // </Grid>

                                // userData.forEach((data) => {
                                //     console.log(data)
                                //     return (
                                //         <Profilecard data={data} />
                                //     )
                                // })

                            }
                        </Grid>

                    </Grid>
                </div>

            )
        } else {                                        //above 600px
            return (
                <div className={classes.root}>
                    <center>
                        <Grid container spacing={1}>
                            <Grid container item xs={6} spacing={12}>


                                {loading === true ?
                                    <CircularProgress />
                                    :
                                    userData.map((details) => {
                                        return (
                                            <Grid container item xs={6} spacing={12}>
                                                <Profilecard avatar={details.avatar_url} name={details.login} />
                                            </Grid>
                                        )
                                    })
                                    // userData.map((details) => {
                                    //     console.log(details)
                                    // })
                                    // console.log(typeof(userData))
                                    // <Grid container item xs={6} spacing={12}>
                                    //      <Profilecard data={userData} />
                                    // </Grid>

                                    // userData.forEach((data) => {
                                    //     console.log(data)
                                    //     return (
                                    //         <Profilecard data={data} />
                                    //     )
                                    // })

                                }
                            </Grid>

                        </Grid>
                    </center>
                </div>
            )
        }
        return <></>;
    };


    //MOVE THE HEADER AND THE BODY COMPONENTS TO THIS FILE AND MAKE A DIFF COMPONOENT FOR THE PROFILE CARDS TO BE DISPLAYED SINCE ITS REUSABLE
    return (
        <div>
            <Container spacing={3}>
                <div className="main">
                    <div className="paper">
                        <Paper elevation={0}>
                            <div>
                                <div className="header">
                                    <Typography variant="h4" id="headerText" ><GitHubIcon style={{ fontSize: 40, marginRight: "1%", color: "black" }} />GitHub Profile Viewer</Typography>
                                </div>
                                <div>
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
                                        <Button variant="contained" color="primary" type="submit" id="sButton" onClick={handleSearch}>
                                            Search
                                        </Button>

                                        {totalResults ?
                                            <Typography variant="h5" id="results" >Total Results : {totalResults}</Typography>
                                            :
                                            null
                                        }
                                    </form>
                                </div>
                            </div>
                            <div className='body'>
                                {BreakpointHelper()}
                            </div>
                        </Paper>
                    </div>
                </div>
            </Container>
        </div>
    );
}