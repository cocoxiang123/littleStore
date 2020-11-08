import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm({ check, OnHandleChange, inputValues }) {

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField required id="cardName" name="cardName" label="Name on card" fullWidth autoComplete="cc-name" onChange={OnHandleChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        name="cardNumber"
                        label="Card number"
                        fullWidth
                        autoComplete="cc-number"
                        onChange={OnHandleChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="expDate" name="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" onChange={OnHandleChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        name="CVV"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="cc-csc"
                        onChange={OnHandleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value={inputValues.saveCard} onChange={OnHandleChange} />}
                        label="Remember credit card details for next time"

                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}