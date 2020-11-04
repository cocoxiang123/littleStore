import React, { useState } from 'react'
import { Button, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions'


function AddToCartBtn({ addToCart, product, cartItem, content }) {

    const useStyle = makeStyles(theme => ({
        button: {
            width: content === 'Buy' ? 100 : 150,
            marginRight: 10
        }
    }))
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(" One item has been added to Cart!")


    const onHandleBuy = () => {
        setOpen(true);
        addToCart(product)
        const haveItem = cartItem.filter(item => item.id === product.id);
        if (haveItem.length > 0) {
            setMessage("Same item has been added to your cart !")
        }
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Button className={classes.button} variant={content === 'Buy' ? 'contained' : 'outlined'} size="medium" color="primary" onClick={onHandleBuy}>{content}</Button>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} elevation={6} variant="filled" severity="success">
                    {message}
                </MuiAlert>
            </Snackbar>
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartBtn)
