import React, {useCallback, useState} from 'react';
import styles from "./styles.module.scss"
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../../redux/redusers/searchSlice";
import debounce from "lodash.debounce"

const Search = () => {

    const [localInput, changeLocalInput] = useState("")
    const updateSearchValue = useCallback(
        debounce((value) => {
            dispatch(setSearchValue(value))
        }, 500),[]
    // left for server side sorting, mock api doesn't work well with sorting
    )

    let onChangeInput = (value) => {
        changeLocalInput(value);
        updateSearchValue(value)
    }

    // const search = useSelector((state) => state.search.value)
    const dispatch = useDispatch()

    return (
        <div>
            <input
                value={localInput}
                className={styles.input}
                onChange={(event) => onChangeInput(event.target.value)
                }
                placeholder="Поиск пиццы"/>
        </div>
    );
}

export default Search;