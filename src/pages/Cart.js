import React, { useEffect, useState } from 'react'
import { Divider, Grid, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
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
    const [dialogOpen, setDialogOpen] = useState(false)
    useEffect(() => {

        updateTotal()
    })
    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };


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
                    <div>
                        <Button variant="outlined" color="primary" size="small" onClick={handleDialogOpen}><DeleteIcon />Clear Cart</Button>
                        <Dialog
                            open={dialogOpen}
                            onClose={handleDialogOpen}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Remove all cart items?"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Are you sure to remove all cart items?
          </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleDialogClose} color="primary">
                                    Cancel
          </Button>
                                <Button onClick={() => clearCart()} color="primary" autoFocus>
                                    Confirm
          </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <Typography variant="subtitle1" className={classes.total}>Total:${total}</Typography>
                </div>
                <Button variant="contained" color="primary" fullWidth>Process to Checkout</Button>

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
