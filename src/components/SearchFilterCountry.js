import React, { useContext } from "react";
import { Context } from "../Context";

function SearchFilterCountry() {
    const { query, setQuery, setFilterData, darkMode } = useContext(Context);

    return (
        
        <form className= "form"
              onSubmit={(e) => e.preventDefault()} >
            
            <div className="search-icon-position">

                <i className=  {darkMode ? "fa fa-search icon darkmode" : "fa fa-search icon"}></i>
              <label htmlFor="search-form" >
                <input type="search"
                       name=  "search-form"
                       className= {darkMode ? "search-field-dark" : "search-field"}
                       placeholder="Search for a country..." 
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                />
              </label>
            </div>

        <select className=  {darkMode ? "filter filter-dark " : "filter"}
                aria-labelledby="dropdownMenu"
                onChange={e => setFilterData(e.target.value)}
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