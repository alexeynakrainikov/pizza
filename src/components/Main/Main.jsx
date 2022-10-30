import React, {useEffect, useState} from 'react';
import Categories from "./Categories";
import Sort from "./Sort";
import PizzaItem from "./PizzaItem";
import Skeleton from "./skeleton";

function Main() {
    const [pizzas, setPizzas] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        fetch("https://635c04f266f78741d5900b17.mockapi.io/pizzas")
            .then((response) => response.json())
            .then((response) => {setPizzas(response);
                setIsFetching(false)
            })
    }, [])

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isFetching
                        ? [...new Array(8)].map((elem, index) => <Skeleton key={index} />
                        )
                        : pizzas.map((pizza) => <PizzaItem key={pizza.id} {...pizza}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Main;