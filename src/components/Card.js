import React, { useState } from 'react';

//material-ui imports
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { Typography, CardActions, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Profilecard(props) {
    const [open, setOpen] = useState(false)

    if (open) {
        return <Profilecard />
    }

    return (
        <div style={{ margin: "3%" }}>
            <Card style={{ maxWidth: "100%" }}>
                <CardHeader
                    avatar={
                        <Avatar variant="rounded">
                            <img src={props.avatar} alt="img" style={{ height: "100%", width: "100%" }} />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                        </IconButton>
                    }

                    title={<Typography variant="h5" component="h2" style={{ marginLeft: "-10%" }}>
                        {props.name}
                    </Typography>}
                />

                <CardContent>
                    <Typography variant="h5">
                        I am a developer working on the MERN stack and looking for full time opportunities
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.gitlink}
                    </Typography>
                </CardContent>
                <center>
                    <Link to={{
                        pathname: `/profile`,
                        state: {
                            avatar: props.avatar,
                            name: props.name
                        }
                    }}>
                        <Button size="small" style={{ margin: "3%" }} >View Profile</Button>

                    </Link>
                </center>

            </Card>
        </div >
    );
}

export default Profilecard;