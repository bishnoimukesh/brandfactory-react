const filterReducer = (state, action) =>{
        switch(action.type){
            case 'FILTER_BY_RATING':
                return {
                    ...state,
                    filterByRating: action.payload
                };
            case 'FILTER_BY_CATEGORY':
                return state.filterByCategory.includes(action.payload)
                ? {...state, filterByCategory: [...state.filterByCategory.filter(item => item !== action.payload)]} : 
                { ...state, filterByCategory: [...state.filterByCategory, action.payload] }
            case 'FILTER_BY_SORT_BY':
                return {
                    ...state,
                    filterBySortBy: action.payload
                };
            case 'FILTER_BY_PRICE_RANGE':
                return {
                    ...state,
                    filterByPriceRange: action.payload
                };
            case 'FILTER_BY_SEARCH':
                return {
                    ...state, filterBySearch: action.payload
                };
            case 'RESET_FILTER':
                return {
                    ...state,
                    filterByRating: 0,
                    filterByCategory:[],
                    filterBySortBy:"",
                    filterByPriceRange:5000,
                    filterBySearch: ""
                };
                default:
                return state;
        }
    }

    export {filterReducer};