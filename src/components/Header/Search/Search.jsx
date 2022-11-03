import React from 'react';
import styles from "./styles.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../../redux/redusers/searchSlice";

const Search = () => {

    const search = useSelector((state) => state.search.value)
    const dispatch = useDispatch()
    return (
        <div>
            <input
                value={search}
                className={styles.input}
                onChange={(event) => {
                    dispatch(setSearchValue(event.target.value))
                }}
                placeholder="Поиск пиццы"/>
        </div>
    );
}

export default Search;