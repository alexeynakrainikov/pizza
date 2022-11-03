import './scss/app.scss';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";
import Cart from "./components/Cart";
import {useState} from "react";

function App() {

    const [searchValue, setSearchValue] = useState("")

    return (
        <div>
            <div className="wrapper">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Routes>
                    <Route path={"/"} element={<Main searchValue={searchValue}/>}/>
                    <Route path={"/cart"} element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
