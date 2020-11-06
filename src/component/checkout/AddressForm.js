import React, { useReducer, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
    const [check, setCheck] = useState(true)
    const [inputValues, setInputValues] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { firstName: '', lastName: '', address1: '', address2: '', city: '', zip: '', country: '', saveAddress: '' }
    );

    const handleOnChange = event => {

        const { name, value } = event.target;
        if (event.target.type === 'checkbox') {
            setCheck(!check)
        }
        setInputValues({ [name]: value });


    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value={check} onChange={handleOnChange} />}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}