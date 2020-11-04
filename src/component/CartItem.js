import React, { useState } from 'react'
import { Card, Typography, Avatar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { removeItem, updateAmount } from '../redux/actions'

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        alignItems: 'center',
        padding: '1.2rem',
        margin: '1.1rem',
        width: 340,
        textAlign: 'left'
    },
    imgContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginRight: 10,
    },
    avatar: {
        minWidth: 80,
        width: '100%',
        height: 'auto',

    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,

    },
    title: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: 120

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
        width: 30,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)

    },
    input: {
        width: 25,
        textAlign: 'center'
    }

}));

function CartItem({ cartItem, amount, removeItem, updateAmount }) {
    const classes = useStyles();
    const { title, price, image, id } = cartItem
    const [inputValue, setInputValue] = useState(amount)


    const onHandleDecrease = () => {
        if (amount > 1) {
            setInputValue(amount - 1)

            updateAmount(id, 'desc')
        }

    }
    const onHandleIncrease = () => {
        if (amount < 99) {
            updateAmount(id, 'inc')
            setInputValue(amount + 1)

        }
    }
    const onInputChange = (e) => {
        const input = e.target.value;
        setInputValue(input);

    }
    const onKeyPressEnter = e => {
        if (e.charCode === 13 || e.key === 'Enter') {
            e.preventDefault();
            onInputLeave()

        }
    }
    const onInputLeave = () => {
        if (inputValue >= 1 && inputValue <= 99) {
            setInputValue(inputValue);
            updateAmount(id, 'update', parseInt(inputValue))

        }
        else if (inputValue > 99) {
            setInputValue(99);
            updateAmount(id, 'update', 99)
        }
        else if (inputValue < 1) {
            setInputValue(1);
            updateAmount(id, 'update', 1)
        }
        else {
            setInputValue(amount);
        }
    }


    return (
        <Card className={classes.card}>
            <div className={classes.imgContainer}>
                <Avatar variant="square" className={classes.avatar} alt="product" title={title} src={image} />
            </div>
            <div className={classes.content}>
                <Typography className={classes.title} variant="body1">{title}</Typography>
                <Typography variant="body1" color='textSecondary'>${(price * amount).toFixed(2)}</Typography>
            </div>
            <div className={classes.operation}>
                <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button variant="outlined" color="primary" size="small" className={classes.button}>Detail</Button>
                </Link>

                <Button variant="outlined" color="primary" size="small" className={classes.button} onClick={() => removeItem(id)}>Remove</Button>
            </div>

            <div className={classes.amount}>
                <Button onClick={onHandleIncrease}>
                    <ExpandLessIcon />
                </Button>
                <input className={classes.input} value={inputValue} onChange={onInputChange} onBlur={onInputLeave} onKeyPress={onKeyPressEnter} />

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
        updateAmount: (id, option, amount) => dispatch(updateAmount(id, option, amount)),
        removeItem: id => dispatch(removeItem(id)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
