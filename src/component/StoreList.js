import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import ProductCard from './ProductCard'
import { productDetails } from '../mockData'

const withStyles = makeStyles({
    root: {

        justifyContent: 'space-around',
        alignContent: 'center',
    }
})

function StoreList() {

    const classes = withStyles();
    const createCard = (product) => {
        return (
            <ProductCard {...product} key={product.id} />
        )
    }

    return (
        <Grid container spacing={5} className={classes.root}>
            {productDetails.map((product) => {
                return createCard(product)
            })}
        </Grid>
    )
}

export default StoreList
