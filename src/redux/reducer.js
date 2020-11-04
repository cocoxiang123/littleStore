import { Add_Item, ClearCart, Remove_Item, Update_Total, Update_Amount } from './actionTypes'

export const reducer = (state, action) => {
    switch (action.type) {
        case Add_Item:
            const haveItem = state.cartItem.filter(
                item => item.id === action.payload.cartItem.id)
            if (haveItem.length > 0) {
                let tempIncCart = state.cartItem.map(item => {
                    if (item.id === action.payload.cartItem.id) {
                        if (item.amount < 99) {
                            item = { ...item, amount: item.amount + 1 }
                        }
                    }
                    return item
                })
                return { ...state, cartItem: tempIncCart }
            }
            else {
                let tempCart = [...state.cartItem, action.payload.cartItem];
                return { ...state, cartItem: tempCart, amount: state.amount + 1 }
            }



        case ClearCart:
            return { ...state, cartItem: action.payload.cartItem, amount: 0, total: 0 }

        case Update_Amount:
            let tempUpdatCart = state.cartItem.map(item => {
                if (item.id === action.payload.id) {
                    if (action.payload.option === 'inc')
                        item = { ...item, amount: item.amount + 1 }
                    if (action.payload.option === 'desc')
                        item = { ...item, amount: item.amount - 1 }
                    if (action.payload.option === 'update')
                        item = { ...item, amount: action.payload.amount }
                }
                return item
            })
            return { ...state, cartItem: tempUpdatCart }



        case Remove_Item:
            return { ...state, cartItem: state.cartItem.filter(item => item.id !== action.payload.id), amount: state.amount - 1 }
        case Update_Total:
            const tempTotal = state.cartItem.reduce((acc, item) => (acc + parseFloat(item.price) * item.amount), 0).toFixed(2)
            return { ...state, total: tempTotal }
        default:
            return state
    }
}