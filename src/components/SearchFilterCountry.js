import React, { useContext } from "react";
import { Context } from "../Context";

function SearchFilterCountry() {
    const { query, setQuery, setFilter } = useContext(Context);

    return (
        
        <form className="form" onSubmit={(e) => e.preventDefault()} >
            
            <div className="search-icon-position">

                <i className="fa fa-search icon"></i>
              <label htmlFor="search-form" >
                <input type="search"
                       name="search-form"
                       className="search-field"
                       placeholder="Search for a country..."
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                />
              </label>
            </div>

        <select className= "filter menu"
                aria-labelledby="dropdownMenu"
                onChange={e => setFilter(e.target.value)}
        >
            <option value="All">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
       </form>
    );
};

export default SearchFilterCountry;
