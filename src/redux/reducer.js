import { Add_Item, ClearCart, Increase_Item, Decrease_Item, Remove_Item, Update_Total } from './actionTypes'

export const reducer = (state, action) => {
    switch (action.type) {
        case Add_Item:
            let tempCart = [...state.cartItem, action.payload.cartItem];
            return { ...state, cartItem: tempCart, amount: state.amount + 1 }

        case ClearCart:
            return { ...state, cartItem: action.payload.cartItem, amount: 0, total: 0 }

        case Increase_Item:
            let tempIncCart = state.cartItem.map(item => {
                if (item.id === action.payload.id) {
                    item = { ...item, amount: item.amount + 1 }
                }
                return item
            })
            return { ...state, cartItem: tempIncCart }

        case Decrease_Item:
            let tempDecCart = state.cartItem.map(item => {
                if (item.id === action.payload.id) {
                    item = { ...item, amount: item.amount - 1 }
                }
                return item
            })
            return { ...state, cartItem: tempDecCart }

        case Remove_Item:
            return { ...state, cartItem: state.cartItem.filter(item => item.id !== action.payload.id) }
        case Update_Total:
            const tempTotal = state.cartItem.reduce((acc, item) => (acc + parseFloat(item.price) * item.amount), 0).toFixed(2)
            return { ...state, total: tempTotal }
        default:
            return state
    }
}