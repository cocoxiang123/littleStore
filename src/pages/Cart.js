import React from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CartItem from '../component/CartItem'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.2rem',
        textAlign: 'center'
    },
    total: {
        textAlign: 'right',
        marginRight: 30
    }
}));
const cartItem = { title: 'cup', price: '$2.99', img: 'https://www.ikea.com/au/en/images/products/ikea-365-espresso-cup-and-saucer-white__0711057_PE727932_S5.JPG?f=g' }
function Cart() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid className={classes.container} >
                <Typography variant="h4">Shopping Cart</Typography>
                <div>
                    <CartItem cartItem={cartItem} />
                    <CartItem cartItem={cartItem} />
                </div>
                <Divider />
                <Typography variant="subtitle1" className={classes.total}>Total:$0.00</Typography>
            </Grid>
        </div>
    )
}

export default Cart
