import { Add_Item, ClearCart, Remove_Item, Update_Total, Update_Amount, Update_Address } from './actionTypes'

export const addItem = (cartItem) => ({
    type: Add_Item,
    payload: {
        cartItem
    }
})
export const clearAll = () => ({
    type: ClearCart,
    payload: {
        cartItem: []
    }
})

export const updateAmount = (id, option, amount) => ({
    type: Update_Amount,
    payload: {
        id, option, amount
    }
})

export const removeItem = id => ({
    type: Remove_Item,
    payload: {
        id
    }
})
export const updateTotal = () => ({
    type: Update_Total,
    payload: {

    }
})

export const updateAddress = address => ({
    type: Update_Address,
    payload: {
        address
    }
})