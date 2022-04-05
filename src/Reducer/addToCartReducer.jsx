const addToCartReducer = (state, action) => {    
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, {...action.payload, qty: 1}]
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };
        case "INCREASE_COUNT":
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        return {...item, qty: item.qty + 1};
                    }
                    return item;
                })
            };
        case "DECREASE_COUNT":
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload.id) {
                        return {...item, qty: item.qty - 1};
                    }
                    return item;
                })
            };
        default:
            return state;
    }
}

const getDataReducer = (state, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state, productData: action.payload
            };
        default:
            return state;
    }
}

export { addToCartReducer, getDataReducer };