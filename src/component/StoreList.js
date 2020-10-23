import React from 'react'
import { Grid, makeStyles, CircularProgress } from '@material-ui/core'
import ProductCard from './ProductCard'


const withStyles = makeStyles({
    root: {

        justifyContent: 'flex-start',
        alignContent: 'center',
        marginLeft: 50
    }
})


function StoreList(props) {
    const { products } = props;

    const classes = withStyles();
    const createCard = (product) => {
        return (
            <ProductCard {...product} key={product.id} />
        )
    }

    return (
        <Grid container spacing={5} className={classes.root}>
            {products ?
                products.map((product) => {
                    return createCard(product)
                })
                : <CircularProgress />
            }
        </Grid>
    )
}

export default StoreList
