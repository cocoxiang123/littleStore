import React, { useContext } from 'react'
import { ProductContext } from '../../context'

import NoMatch from '../NoMatch'
import './product.css'
import { useParams } from 'react-router-dom'
import { Typography, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addItem } from '../../redux/actions'



const withStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        minHeight: '100vh',
        padding: '0.8rem',
        [theme.breakpoints.down('sm')]: {
            padding: '2rem',
        },

    },
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
    product_img: {

    },
    ID: {
        fontSize: '1.03rem'
    },
    addCart: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    btnAddCart: {
        marginRight: 5
    },
    description: {
        marginTop: '0.8rem',
        fontSize: '1.05rem'
    },
    price: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: '1rem'
    },
    category: {
        textTransform: 'uppercase'
    }
})
)
function Product({ addToCart }) {
    const store = useContext(ProductContext);
    const { products } = store;
    const slug = useParams().id;
    const productDetail = products.filter(product => product.id.toString() === slug);
    const classes = withStyles();
    console.log(productDetail)
    const productImg = document.querySelectorAll(".product_img")[0];

    const onImgMouseMove = (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        if (productImg) {
            productImg.style.transformOrigin = `${x}px ${y}px`;
            productImg.style.transform = `scale(1.8)`;
        }
    }
    const onImgMouseLeave = () => {
        if (productImg) {
            productImg.style.transformOrigin = "center center";
            productImg.style.transform = "scale(1)";
        }
    }
    return (
        <>

            <Grid className={classes.container}>
                {productDetail.length > 0 ?

                    <div className={classes.root}>
                        <Typography variant="h5">{productDetail[0].title}</Typography>
                        <Typography variant="subtitle1" className={classes.category}>{productDetail[0].category}</Typography>
                        <div className="img_container" id="img_container" onMouseMove={onImgMouseMove} onMouseLeave={onImgMouseLeave}>
                            <img

                                alt="Product"
                                src={productDetail[0].image}
                                title={productDetail[0].title}
                                className="product_img"
                                id="product_img"
                            />
                        </div>
                        <div className={classes.addCart}>
                            <Typography variant="subtitle2" color="textSecondary" className={classes.ID}>ID:{productDetail[0].id}</Typography>
                            <Button mt={6} variant="outlined" size="medium" color="primary" className={classes.btnAddCart} onClick={() => addToCart(productDetail[0])}>Add to Cart</Button>
                        </div>
                        <Typography variant="body2" className={classes.description}>Description: {productDetail[0].description}</Typography>
                        <Typography variant="body1" component="p" className={classes.price} color="textSecondary">
                            {`Price: $${productDetail[0].price}`}
                        </Typography>
                        <Link to={`/`} className={classes.link}>
                            <Button mt={6} variant="contained" size="medium" color="primary" >Back to Home</Button>
                        </Link>



                    </div>


                    : <NoMatch className={classes.loading} />

                }
            </Grid>

        </>
    )
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (item) => dispatch(addItem(item))
    }
}
export default connect(null, mapDispatchToProps)(Product)
