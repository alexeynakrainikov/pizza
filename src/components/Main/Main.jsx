import React, {useEffect, useState} from 'react';
import Categories from "./Categories";
import Sort from "./Sort";
import PizzaItem from "./PizzaItem";
import Skeleton from "./skeleton";

function Main({searchValue}) {
    const [pizzas, setPizzas] = useState([])
    const pizzasItems = pizzas.filter((pizza) =>
        pizza.title.toUpperCase().includes(searchValue.toUpperCase())
    )
    const [isFetching, setIsFetching] = useState(true)

    const [sortOption, setSortOption] = useState({
        name: "популярности",
        sortOption: "rating"
    })
    const [activeCategory, setActiveCategory] = useState(0)
    const [asc, setAsc] = useState(true)
    const sortOptions = [
        {
            name: "популярности",
            sortOption: "rating"
        },
        {
            name: "цене",
            sortOption: "price"
        },
        {
            name: "алфавиту",
            sortOption: "title"
        }
    ]
    const url = `https://635c04f266f78741d5900b17.mockapi.io/pizzas?category=${!activeCategory ? '' : activeCategory}&sortBy=${sortOption.sortOption}&order=${asc ? 'asc' : "desc"}`

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
                    <Categories activeCategory={activeCategory}
                                setActiveCategory={(index) => setActiveCategory(index)}/>
                    <Sort asc={asc} setAsc={setAsc} sortOptions={sortOptions} sortOption={sortOption}
                          setSortOption={(index) => setSortOption(index)}/>
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