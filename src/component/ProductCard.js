import React from 'react'
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addItem } from '../redux/actions'

const withStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        marginTop: theme.spacing(3),
        margin: 50,
        maxWidth: 300,
        maxHeight: 430
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
        margin: 10
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



function ProductCard({ product, addToCart, cartItem }) {
    const classes = withStyles();
    const { image: img, title, price, id } = product;
    const [open, setOpen] = React.useState(false);

    const onHandleBuy = () => {
        setOpen(true);
        const haveItem = cartItem.filter(
            item => item.id === id)

        if (haveItem.length > 0) {
            return
        }
        else {
            addToCart(product)
        }

    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (

        <Grid item sm={12} md={6} lg={4} className={classes.root}>

            <Card  >

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

                <Link to={`/product/${id}`} className={classes.link}>
                    <Button className={classes.button} variant="contained" size="medium" color="primary">Detail</Button>

                </Link>

                <Button className={classes.button} variant="contained" size="medium" color="primary" onClick={onHandleBuy}>Buy</Button>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <MuiAlert onClose={handleClose} elevation={6} variant="filled" severity="success">
                        One item has been added to Cart!
        </MuiAlert>
                </Snackbar>
            </Card>

        </ Grid>
    )
}
const mapStateToProps = state => {
    return {
        cartItem: state.cartItem
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        addToCart: (item) => dispatch(addItem(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
