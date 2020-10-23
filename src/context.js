import React, { useState, useEffect } from 'react'
import { FetchProduct } from './api/index'

export const ProductContext = React.createContext();

function ProductProvider({ children }) {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const getData = async () => {
            setProducts(await FetchProduct())
        }
        getData();
    }, [])


    return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>

}

export default ProductProvider;