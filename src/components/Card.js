import React from 'react';

//package imports
import { Link } from 'react-router-dom';

//material-ui imports
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Button } from '@material-ui/core';


function Profilecard(props) {

    return (
        <div style={{ margin: "3%" }}>
            <Card style={{ maxWidth: "100%" }}>
                <CardHeader
                    avatar={
                        <Avatar variant="rounded">
                            <img src={props.avatar} alt="img" style={{ height: "100%", width: "100%" }} />
                        </Avatar>
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
                            name: props.name,
                            gitlink: props.gitlink
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