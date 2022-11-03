import React, {useEffect, useState} from 'react';
import Categories from "./Categories";
import Sort from "./Sort";
import PizzaItem from "./PizzaItem";
import Skeleton from "./skeleton";
import {useSelector} from "react-redux";

function Main() {
    const search = useSelector((state) => state.search.value)
    const category = useSelector((state) => state.activeCategory.value)
    const sort = useSelector((state) => state.sort.value)
    const asc = useSelector((state) => state.asc.value)

    const [pizzas, setPizzas] = useState([])
    const pizzasItems = !search?pizzas:
        pizzas.filter((pizza) =>
        pizza.title.toUpperCase().includes(search.toUpperCase())
    )
    const [isFetching, setIsFetching] = useState(true)

    const url = `https://635c04f266f78741d5900b17.mockapi.io/pizzas?category=${!category ? '' : category}&sortBy=${sort.sortOption}&order=${asc ? 'asc' : "desc"}`

    useEffect(() => {
        setIsFetching(true)
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                setPizzas(response);
                setIsFetching(false)
            })
    }, [url])

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isFetching
                        ? [...new Array(8)].map((elem, index) => <Skeleton key={index}/>
                        )
                        : pizzasItems.map((pizza) => <PizzaItem key={pizza.id} {...pizza}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Main;