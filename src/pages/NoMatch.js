import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const withStyles = makeStyles({
    noMatch: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',

    }
})
function NoMatch() {
    const classes = withStyles();
    return (
        <Grid className={classes.noMatch}>
            <Typography variant="h5">We don’t have anything that matches </Typography>

        </Grid>

    )
}

export default NoMatch
