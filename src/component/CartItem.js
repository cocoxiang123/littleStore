import React from 'react'
import { Card, Typography, Avatar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { increaseItem, decreaseItem, removeItem } from '../redux/actions'

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        alignItems: 'center',
        padding: '1.1rem',
        margin: '1.1rem',
        width: 340,
        textAlign: 'left'
    },
    avatar: {
        display: 'flex',
        width: 90,
        height: 90,
        marginRight: 10,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    },
    amount: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    operation: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between'
    },
    button: {
        margin: 3,
        width: 30

    }

}));

function CartItem({ cartItem, amount, increaseItem, decreaseItem, removeItem }) {
    const classes = useStyles();
    const { title, price, image, id } = cartItem
    const onHandleDecrease = () => {
        if (amount > 1) {
            decreaseItem(id)
        }

    }

    return (
        <Card className={classes.card}>
            <Avatar variant="square" className={classes.avatar} alt="product" title={title} src={image} />
            <div className={classes.content}>
                <Typography variant="body1">{title}</Typography>
                <Typography variant="body1" color='textSecondary'>${(price * amount).toFixed(2)}</Typography>
            </div>
            <div className={classes.operation}>
                <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button variant="outlined" color="primary" size="small" className={classes.button}>Detail</Button>
                </Link>

                <Button variant="outlined" color="primary" size="small" className={classes.button} onClick={() => removeItem(id)}>Remove</Button>
            </div>

            <div className={classes.amount}>
                <Button onClick={() => increaseItem(id)}>
                    <ExpandLessIcon />
                </Button>
                {amount}
                <Button onClick={onHandleDecrease} >
                    <ExpandMoreIcon />
                </Button>

            </div>


        </Card >
    )
}
const mapStateToProps = (state, ownProps) => {
    const { amount } = ownProps.cartItem
    return {
        amount: amount,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        increaseItem: id => dispatch(increaseItem(id)),
        decreaseItem: id => dispatch(decreaseItem(id)),
        removeItem: id => dispatch(removeItem(id)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
