import React, { useState } from 'react';
import {Search_Bar} from './assets/scss/SearchBar.scss';

function SearchBar({searchEmail}) {
    const [inputSearch, setInputSearch]=useState("");

    const saveInputSearch = (e) =>{
        setInputSearch(e.target.value);
        searchEmail(e.target.value);
    }

    return (
        <div className={Search_Bar}>
            <input
                type='text'
                value={inputSearch}
                onChange={saveInputSearch}
                placeholder='찾기'/>
        </div>
    );
}

export default SearchBar;