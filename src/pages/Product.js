import React, { useContext } from 'react'
import { ProductContext } from '../context'
import Nav from '../component/Nav'
import { useParams } from 'react-router-dom'
import { Typography, CardMedia, CircularProgress, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const withStyles = makeStyles({
    root: {
        width: 450,
        margin: 'auto',
        marginTop: '2rem',
        marginBottom: '2rem'
    },
    loading: {

        margin: 'auto'
    },
    link: {
        textDecoration: 'none',

    },
    img: {
        width: '100%',
        height: 'auto'
    },
    description: {
        marginTop: '0.8rem'
    },
    price: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: '1rem'
    },
    category: {
        textTransform: 'uppercase'
    }
}
)
function Product(props) {
    const products = useContext(ProductContext);
    const slug = useParams().id;
    const productDetail = products.filter(product => product.id.toString() === slug);
    const classes = withStyles();
    console.log(productDetail)
    return (
        <>
            <Nav />
            {productDetail.length > 0 ?
                <div className={classes.root}>
                    <Typography variant="h5">{productDetail[0].title}</Typography>
                    <Typography variant="subtitle1" className={classes.category}>{productDetail[0].category}</Typography>

                    <CardMedia
                        component="img"
                        alt="Product image"
                        image={productDetail[0].image}
                        title={productDetail[0].title}
                        className={classes.img}
                    />
                    <Typography variant="subtitle2" color="textSecondary">ID:{productDetail[0].id}</Typography>
                    <Typography variant="body2" className={classes.description}>Description: {productDetail[0].description}</Typography>
                    <Typography variant="body1" component="p" className={classes.price}>
                        {`Price: $${productDetail[0].price}`}
                    </Typography>
                    <Link to={`/`} className={classes.link}>
                        <Button mt={6} variant="contained" size="medium" color="primary" >Back to Home</Button>
                    </Link>
                </div>
                : <CircularProgress className={classes.loading} />

            }


        </>
    )
}

export default Product
