import './scss/app.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaItem from "./components/PizzaItem";
import pizzas from  "./assets/pizzas.json"


function App() {
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
                  <PizzaItem imageUrl = {pizza.imageUrl} title = {pizza.title} types = {pizza.types}
                             sizes = {pizza.sizes} price = {pizza.price}/>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
