import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

const Description = (props) => {
    
    const classes = useStyles();
    const img = `../../img/${props.card.cover}`;
    
    return(
        <Grid item key={props.card.id} xs={12} sm={12} md={12}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={<Avatar aria-label="recipe">{props.card.author.charAt(0)}</Avatar>}
                    title={props.card.title}
                    subheader={moment(props.card.created).format("dddd, MMMM Do YYYY")}
                />
                <CardMedia
                    className={classes.cardMedia}
                    image={img}
                    title={props.card.title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography>
                        description={props.card.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" color="primary">
                        <Link to="/" style={{textDecoration: "none", color: "white"}}>
                            Back
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Description;