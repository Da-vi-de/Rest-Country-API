import React from "react";
import FilterCountries from "./FilterCountries";

function SearchCountry() {
    return(
        <form className="form">

            <div className="search-icon-position">

                <i className="fa fa-search icon"></i>

                <input type="text"
                        className="search-field"
                        placeholder="Search for a country..."
                        aria-label="Write the country you are searching for"
                />
            </div>
            <FilterCountries />
        </form>
    );
};

export default SearchCountry;