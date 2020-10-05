import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    }
  }));

const Post = (props) => {
    
    const classes = useStyles();
    const img = `img/${props.cover}`;
    
    return(
        <Card className={classes.card}>
            <CardHeader
                avatar={<Avatar aria-label="recipe">{props.author.charAt(0)}</Avatar>}
                title={props.title.length <= 25 ? props.title : `${props.title.substr(0, 21)}...`}
                subheader={moment(props.created).format("dddd, MMMM Do YYYY")}
            />
            <CardMedia
                className={classes.cardMedia}
                image={img}
                title={props.title.length <= 25 ? props.title : `${props.title.substr(0, 21)}...`}
            />
            <CardContent className={classes.cardContent}>
                <Typography>
                  description={props.description.length <= 250 ? props.description : `${props.description.substr(0, 246)}...`}
                </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <Link
                  to={`description/${props.id}`}
                  style={{textDecoration: "none"}}
                  onClick={() => {props.chooseCard(props.id);}}
                >
                  Read More...
                </Link>
              </Button>
            </CardActions>
        </Card>
    )
}

export default Post;