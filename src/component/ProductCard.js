import React from 'react'
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const withStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
        margin: 40,
        maxWidth: 280,
        height: 450
    },
    container: {


    },
    content: {
        height: 380,
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'space-between'
    },
    media: {
        maxHeight: '80%',
        maxWidth: '100%'
    },
    button: {
        margin: 10
    },
    title: {
        height: 50,
        overflow: 'hidden'
    }
}))

function ProductCard(props) {

    const classes = withStyles();
    const { image: img, title, price } = props;

    return (

        <Grid item xs={12} sm={6} md={4} >

            <Card className={classes.root} >
                <CardActionArea className={classes.container}>
                    <CardContent className={classes.content}>

                        <CardMedia component="img" className={classes.media} image={img} title={title} alt={title} />
                        <Typography className={classes.title} variant="subtitle1">{title}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                            {`$${price}`}
                        </Typography>

                    </CardContent>
                </CardActionArea>

                <Button className={classes.button} variant="contained" size="medium" color="primary">Detail</Button>
                <Button className={classes.button} variant="contained" size="medium" color="primary">Buy</Button>
            </Card>

        </ Grid>
    )
}

export default ProductCard
