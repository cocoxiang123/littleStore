import React from 'react'
import { Card, Typography, Avatar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    }
}));

function CartItem(props) {
    const classes = useStyles();
    const { title, price, img } = props.cartItem

    return (
        <Card className={classes.card}>
            <Avatar variant="square" className={classes.avatar} alt="product" title={img}>{img}</Avatar>
            <div className={classes.content}>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body1" color='textSecondary'>{price}</Typography>
            </div>
            <Button>Remove</Button>

            <div className={classes.amount}>
                <Button>
                    <ExpandLessIcon />
                </Button>
                1
                <Button>
                    <ExpandMoreIcon />
                </Button>

            </div>


        </Card>
    )
}

export default CartItem
