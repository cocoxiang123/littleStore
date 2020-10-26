import React, { useState, useEffect } from 'react'
import { FetchProduct } from './api/index'
import { useHistory } from "react-router-dom";

export const ProductContext = React.createContext();

function ProductProvider({ children }) {
    let history = useHistory();
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const getData = async () => {
            setProducts(await FetchProduct())
        }
        getData();
    }, [])

    const onChangeSearch = input => {
        setSearch(input)
    }
    const onKeyUpChange = event => {
        if (event.keyCode === 13)
            history.push("/");
    }
    const filteredProducts = () => {
        if (search.length > 0 && products)
            return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    }

    const state = {
        products,
        onChangeSearch,
        search,
        onKeyUpChange,
        filteredProducts,
    }

    return <ProductContext.Provider value={state}>{children}</ProductContext.Provider>

}

export default ProductProvider;