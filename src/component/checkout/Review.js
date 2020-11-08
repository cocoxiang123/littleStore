import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';






const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

function Review({ inputValues, cart }) {
    const classes = useStyles();
    const { address1, address2, city, zip, country, firstName, lastName, cardName, cardNumber, expDate, CVV } = inputValues;
    const addresses = [address1, address2, city, zip, country];
    const payments = [
        { name: 'Card type', detail: 'Visa' },
        { name: 'Card holder', detail: cardName },
        { name: 'Card number', detail: cardNumber },
        { name: 'Expiry date', detail: expDate },
    ];
    const products = cart.map(cart => {
        return {
            name: cart.title,
            amount: cart.amount,
            price: cart.amount * cart.price,

        }
    })
    const total = cart.reduce(((acc, cur) => acc + cur.price * cur.amount), 0)
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
      </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem className={classes.listItem} key={product.name}>
                        <ListItemText primary={product.name} secondary={`X ${product.amount}`} />
                        <Typography variant="body2">${product.price}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        {total === 0 ? '$0.00' : `$ ${total}`}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Shipping
          </Typography>
                    <Typography gutterBottom>{firstName + ' ' + lastName}</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Payment details
          </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
const mapStateToProps = state => {
    return { cart: state.cartItem }
}
export default connect(mapStateToProps)(Review);