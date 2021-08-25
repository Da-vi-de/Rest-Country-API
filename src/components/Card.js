import React from "react";

import { Link } from "react-router-dom";

function Card({country}) {
    return(
        
        <div className="country-card">

            <div className="country-preview">
                <Link to="/singlecountry">
                    <img src={country.flag} 
                         alt="Chosen country flag" 
                         className="image"
                    /> 
                </Link>
            </div>

            <div className="country-info">

                <div className="country-detail">

                <div className="country-title">
                  <h3>{country.name}</h3>
                </div>

                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
              </div>
            </div>
        </div>
    );
};

export default Card;