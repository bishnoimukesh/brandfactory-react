import React from 'react'
import { Card } from './../../components/Card/Card';
import { Nav } from './../../components/Nav/Nav';
import './ProductPage.css';
import { useCartContext } from './../../Context/CardContext';
import { filterBy } from "../../Reducer/reducerUtility";

const ProductPage = () => {
    const { getProduct:{productData}, filterState: { filterByRating, filterByCategory, filterBySortBy, filterByPriceRange, filterBySearch }, filterDispatch } = useCartContext();
    const filterData = filterBy(productData, filterByRating, filterByCategory, filterBySortBy, filterByPriceRange, filterBySearch);
    return (
        <>
            <Nav />
            <div className="content-container">
                <aside className="filter">
                    <ul className="list">
                        <div className="list-heading">
                            <span>Price</span>
                            <span>
                                <h4 className="reset-btn">
                                    <button className="reset" onClick={() => filterDispatch({ type: "RESET_FILTER" })}>Reset</button>
                                </h4>
                            </span>
                        </div>
                        <label htmlFor="slider">
                            <input className="filter-slider" type="range" min={100} max={3000} value={filterByPriceRange} onChange={(e) => filterDispatch({ type: "FILTER_BY_PRICE_RANGE", payload: e.target.value })} />
                        </label>
                        <div className="list-heading">
                            <span>Catagory</span>
                        </div>
                        <label className="list-label" htmlFor="checkbox1">
                            <input className="checkbox" type="checkbox" onClick={() => filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "Men" })} checked={filterByCategory.includes("Men")} readOnly />Men Clothing
                        </label>
                        <label className="list-label" htmlFor="checkbox2">
                            <input className="checkbox" type="checkbox" onClick={() => filterDispatch({ type: "FILTER_BY_CATEGORY", payload: "Women" })} checked={filterByCategory.includes("Women")} readOnly />Women Clothing
                        </label>

                        <div className="list-heading">
                            <span>Rating</span>
                        </div>
                        <label className="list-label star" htmlFor="checkbox1">
                            <input className="checkbox" type="radio" name="sort-by-rating" onClick={() => filterDispatch({ type: "FILTER_BY_RATING", payload: 1 })} checked={filterByRating === 1} readOnly />☆
                        </label>
                        <label className="list-label star" htmlFor="checkbox2">
                            <input className="checkbox" type="radio" name="sort-by-rating" onClick={() => filterDispatch({ type: "FILTER_BY_RATING", payload: 2 })} checked={filterByRating === 2} readOnly />☆☆
                        </label>
                        <label className="list-label star" htmlFor="checkbox3">
                            <input className="checkbox" type="radio" name="sort-by-rating" onClick={() => filterDispatch({ type: "FILTER_BY_RATING", payload: 3 })} checked={filterByRating === 3} readOnly />☆☆☆
                        </label>
                        <label className="list-label star" htmlFor="checkbox4">
                            <input className="checkbox" type="radio" name="sort-by-rating" onClick={() => filterDispatch({ type: "FILTER_BY_RATING", payload: 4 })} checked={filterByRating === 4} readOnly />☆☆☆☆
                        </label>
                        <label className="list-label star" htmlFor="checkbox5">
                            <input className="checkbox" type="radio" name="sort-by-rating" onClick={() => filterDispatch({ type: "FILTER_BY_RATING", payload: 5 })} checked={filterByRating === 5} readOnly />☆☆☆☆☆
                        </label>
                        <div className="list-heading">
                            <span>Sort by</span>
                        </div>
                        <label className="list-label" htmlFor="checkbox1">
                            <input className="checkbox" type="radio" name="price-to" onClick={() => filterDispatch({ type: "FILTER_BY_SORT_BY", payload: "PRICE_LOW_TO_HIGH" })} checked={filterBySortBy === "PRICE_LOW_TO_HIGH"} readOnly />Price-Low to High
                        </label>
                        <label className="list-label" htmlFor="checkbox2">
                            <input className="checkbox" type="radio" name="price-to" onClick={() => filterDispatch({ type: "FILTER_BY_SORT_BY", payload: "PRICE_High_TO_LOW" })} checked={filterBySortBy === "PRICE_High_TO_LOW"} readOnly />Price-High to Low
                        </label>
                    </ul>

                </aside>
                <main className="product-container">
                    <div className="product-heading">
                        <h1>Product</h1>
                    </div>
                    <div className="card-container">
                        {filterData.map((product) => <Card data={product} key={product.id} />)}
                    </div>
                </main>
            </div>
        </>
    )
}

export { ProductPage }