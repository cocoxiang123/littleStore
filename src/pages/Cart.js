import React, { useEffect } from 'react'
import { Divider, Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CartItem from '../component/CartItem'
import { clearAll, updateTotal } from '../redux/actions'
import { connect } from 'react-redux';


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
    },
    summary: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1.1rem'
    },
    empty: {
        margin: '1.1rem'
    }
}));

function Cart({ cart, clearCart, updateTotal, total }) {
    const classes = useStyles();
    useEffect(() => {

        updateTotal()
    })

    if (cart.length === 0) {
        return (
            <div className={classes.root}>
                <Grid className={classes.container} >
                    <Typography variant="h4">Shopping Cart</Typography>
                    <Typography variant="body1" className={classes.empty}>
                        is currently empty
            </Typography>

                </Grid>
            </div>
        )
    }


    return (
        <div className={classes.root}>
            <Grid className={classes.container} >
                <Typography variant="h4">Shopping Cart</Typography>
                <div>
                    {cart.map(item => {
                        return <CartItem cartItem={item} key={item.id} />
                    })}


                </div>
                <Divider />
                <div className={classes.summary} >
                    <Button variant="contained" color="primary" size="small" onClick={() => clearCart()}>Clear Cart</Button>
                    <Typography variant="subtitle1" className={classes.total}>Total:${total}</Typography>
                </div>

            </Grid>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        cart: state.cartItem,
        total: state.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearCart: () => dispatch(clearAll()),
        updateTotal: () => dispatch(updateTotal())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
