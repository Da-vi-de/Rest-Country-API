import React  from "react";

function FilterCountries() {
    return(
        <>
        <button className="filter-btn"
                type="button"
        >
        Filter by Region

            <i className="fa fa-chevron-down"></i>
        </button>

        <div className="menu hide" id="dropdown">
            <span>Africa</span>
            <span>America</span>
            <span>Asia</span>
            <span>Europe</span>
            <span>Oceania</span>
        </div>
      </>
    );
};

export default FilterCountries;