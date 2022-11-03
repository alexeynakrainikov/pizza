import React from 'react';
import styles from "./styles.module.scss"

function Search({searchValue, setSearchValue}) {
    return (
        <div>
            <input
                value={searchValue}
                className={styles.input}
                onChange={(event) => {
                    setSearchValue(event.target.value)
                }}
                placeholder="Поиск пиццы"/>
        </div>
    );
}

export default Search;