import React from 'react';

//material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
    },
}));


function Body(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid container item xs={6} spacing={12}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                            />

                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests
              </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid container item xs={6} spacing={12}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                            />

                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests
              </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid container item xs={6} spacing={12}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                            />

                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests
              </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid container item xs={6} spacing={12}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                            />

                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests
              </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Body;