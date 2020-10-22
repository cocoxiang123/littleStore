import React from 'react'
import Nav from '../component/Nav'

function Product({ match }, props) {
    console.log(props.products)
    return (
        <>
            <Nav />
        </>
    )
}

export default Product
