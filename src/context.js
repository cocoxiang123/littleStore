import React, { useState, useEffect } from 'react'
import { FetchProduct } from './api/index'
import { useHistory } from "react-router-dom";

export const ProductContext = React.createContext();

function ProductProvider({ children }) {
    let history = useHistory();
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState('relevance')



    useEffect(() => {
        const getData = async () => {
            setProducts(await FetchProduct())
        }
        getData();
    }, [])

    const onChangeSearch = input => {
        setSearch(input)
    }
    const onClearSearch = () => {
        setSearch("");
    }
    const onKeyUpChange = event => {
        if (event.keyCode === 13)
            history.push("/");
    }
    const handleSortChange = e => {
        setSort(e.target.value)
        if (e.target.value === 'lowest') {
            products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))

        }
        if (e.target.value === 'highest') {
            products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        }
        if (e.target.value === 'relevance') {


            products.sort((a, b) => a.id - b.id)
        }
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
        onClearSearch,
        filteredProducts,
        sort,
        handleSortChange
    }

    return <ProductContext.Provider value={state}>{children}</ProductContext.Provider>

}

export default ProductProvider;