import './scss/app.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaItem from "./components/PizzaItem";
import {useEffect, useState} from "react";

function App() {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch("https://635c04f266f78741d5900b17.mockapi.io/pizzas")
            .then((response) => response.json())
            .then((response) => setPizzas(response))
    }, [])

    return (
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories/>
                            <Sort/>
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {pizzas.map((pizza) =>
                                <PizzaItem key={pizza.id} {...pizza}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
