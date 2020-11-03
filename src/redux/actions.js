import { Add_Item, ClearCart, Increase_Item, Decrease_Item, Remove_Item, Update_Total } from './actionTypes'

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
export const increaseItem = id => ({
    type: Increase_Item,
    payload: {
        id
    }
})
export const decreaseItem = id => ({
    type: Decrease_Item,
    payload: {
        id
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