const filterBy = (productData, filterByRating, filterByCategory, filterBySortBy, filterByPriceRange, filterBySearch) => {
    let filteredProducts = productData;
    if(filterByRating !== 0){
        filteredProducts = filteredProducts.filter(product => Number(product.rating.rate) >= filterByRating);
    }
    if(filterByCategory.length > 0){
        filteredProducts = filteredProducts.filter(product => filterByCategory.includes(product.category));
    }
    if(filterBySortBy !== ""){
        filteredProducts = filteredProducts.sort((a, b) => {
            if(filterBySortBy === "PRICE_LOW_TO_HIGH"){
                return a.price - b.price;
            }else{
                return b.price - a.price;
            }
        });
    }
    if(filterByPriceRange !== 5000){
        filteredProducts = filteredProducts.filter(product => Number(product.price) <= filterByPriceRange);
    }
    if(filterBySearch !== ""){
        filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(filterBySearch.toLowerCase()));
    }
    return filteredProducts;
}

export {filterBy};