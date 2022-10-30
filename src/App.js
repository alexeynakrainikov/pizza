import './scss/app.scss';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";
import Cart from "./components/Cart";

function App() {

    return (
        <div>
            <div className="wrapper">
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Main/>}/>
                    <Route path={"/cart"} element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
