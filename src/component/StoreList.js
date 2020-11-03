import React, { useContext } from 'react'
import { Grid, makeStyles, CircularProgress, Typography } from '@material-ui/core'
import ProductCard from './ProductCard'
import { ProductContext } from '../context'
import SortForm from './SortForm'



const withStyles = makeStyles({
    root: {
        width: '100%',
        minHeight: '100vh',


    },
    container: {

        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 'auto',

    },
    noMatch: {
        marginTop: 100
    },

})


function StoreList() {
    const store = useContext(ProductContext);
    const { filteredProducts, search } = store;
    let { products } = store;

    if (filteredProducts()) {
        products = [...filteredProducts()]
    }

    const classes = withStyles();

    const noMatchSearch = () => {
        return (
            <Grid className={classes.noMatch}>
                <Typography variant="h5">We don’t have anything that matches '{search}'</Typography>
                <Typography variant="body2" color="textSecondary" className={classes.hint}> Check your spelling and try again or use a more general search term.</Typography>
            </Grid>
        )
    }

    return (
        <Grid className={classes.root}>
            <SortForm />
            <Grid container spacing={5} className={classes.container}>

                {products.length > 0 ? (
                    products.map((product) => {
                        return <ProductCard product={product} key={product.id} />
                    })
                )
                    :
                    (search.trim().length > 0 ?
                        (
                            noMatchSearch()
                        ) :
                        <CircularProgress />)
                }
            </Grid>
        </Grid>
    )
}

export default StoreList
