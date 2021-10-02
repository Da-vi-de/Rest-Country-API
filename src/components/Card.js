import React, { useContext }  from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Card({country}) {
  const  { darkMode } = useContext(Context);

    return(
      
        <div className= {darkMode ? "country-card-dark" : "country-card"}>

            <div className="country-preview">
                <Link to={`/singlecountry/${country.name}`}>
                    <img src={country.flag} 
                         alt="Country flag" 
                         className="image"
                    /> 
                </Link>
            </div>

            <div className= {darkMode ? "country-info-dark" : "country-info"}>

                <div className="country-detail">

                <div className="country-title">
                  <h1>{country.name}</h1>
                </div>

                <p>Population: <span>{country.population.toLocaleString('en-US')}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
              </div>
            </div>
        </div>
       
    );
};

export default Card;