import React from 'react'
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import AddToCartBtn from './AddToCartBtn';


const withStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        marginTop: theme.spacing(3),
        margin: 50,
        maxWidth: 300,
        maxHeight: 430
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItem: "center"
    },
    container: {
        marginBottom: 5

    },
    content: {
        height: 380,
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },
    media: {
        maxwidth: '100%',
        width: 210,
        height: 'auto',
        maxHeight: 300
    },
    button: {
        width: 100,
        marginRight: 10
    },
    operation: {
        display: 'flex',
        margin: 'auto',
        alignItems: 'center',
        padding: '1.1rem'

    },
    title: {
        maxHeight: 55,
        overflow: 'hidden',
        color: "black",
    },
    price: {
        fontSize: '1.1rem',
    },
    link: {
        textDecoration: 'none'
    }
}))



function ProductCard({ product }) {
    const classes = withStyles();
    const { image: img, title, price, id } = product;




    return (

        <Grid item sm={12} md={6} lg={4} className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea className={classes.container}>
                    <Link to={`product/${id}`} className={classes.link}>
                        <CardContent className={classes.content}>
                            <div className="img_container">
                                <CardMedia component="img" className={classes.media} image={img} title={title} alt={title} />
                            </div>
                            <Typography className={classes.title} variant="subtitle1">{title}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.price}>
                                {`$${price}`}
                            </Typography>

                        </CardContent>
                    </Link>
                </CardActionArea>
                <div className={classes.operation}>
                    <Link to={`/product/${id}`} className={classes.link}>
                        <Button className={classes.button} variant="contained" size="medium" color="primary">Detail</Button>
                    </Link>
                    <AddToCartBtn className={classes.button} product={product} content="Buy" />
                </div>
            </Card>

        </ Grid>
    )
}

export default ProductCard
