const wishListReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {
                ...state, wishList: [...state.wishList, action.payload]
            };
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state, wishList: state.wishList.filter(item => item.id !== action.payload.id)
            };
        default:
            return state;
    }
}
export { wishListReducer };