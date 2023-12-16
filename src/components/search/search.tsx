'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './search.module.css';

const Search = () => {
    const [search, setSearch] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(search);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" onChange={handleChange} value={search}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search;