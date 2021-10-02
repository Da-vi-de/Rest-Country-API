import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../Context";

function SingleCountry() {
  const { allCountries, darkMode } = useContext(Context);
  const { name } = useParams();

  const country = allCountries.find((country) => country.name === name);
  
  const {
    alpha2Code,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = country;

  // This structure has worked perfectly with the old API.
  // Unfortunately the old API is no more available (the change occured nearly at the end of the project), 
  // the new one is almost the same except for borders. If a country has no border countries, there's no property
  // so the page is blank because of the above destructuring. Currently The API is unstable, i had other issues
  // but they fix them.
  
  const borderCountries = borders.map(border => {
      const nation = allCountries.find (
        (country) => country.alpha3Code === border
        )
      return {
        name: nation.name
      }
    })

  return (
    <main className="main-content">
      <div className="back-btn-container">
        <Link to="/">
          <button className= {darkMode ? "back-btn-dark" : "back-btn"}>
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            Back
          </button>
        </Link>
      </div> 
          <div className="detail-container" key={alpha2Code}>
            <div className="detail-page-img-position">
              <img src={flag} alt="Country flag" className="detail-country-img" />
            </div>

            <article className="detail-info-position">
              <h2>{name}</h2>
              <p>Native name: <span>{nativeName}</span></p>
              <p>Population: <span>{population.toLocaleString('en-US')}</span></p>
              <p>Region: <span>{region}</span></p>
              <p>Subregion: <span>{subregion}</span></p>
              <p>Capital: <span>{capital}</span></p>
            </article>

            <div className="extra-detail-position">
              <p>Top Level Domain: <span>{topLevelDomain}</span></p>
              <p>Currencies: <span>{currencies.map((cur) => cur.name).join(", ")}</span></p>
              <p>Languages: <span>{languages.map((lan) => lan.name).join(", ")}</span></p>
            </div>
          
    
          <div className="border-countries-position">
            <p>Border Countries: </p>
            {borderCountries.length > 0 ? 
            borderCountries.map((country, index) => {
                      return (
                        <Link
                          to={`/singlecountry/${country.name}`}
                          key={index} 
                        >
                          <button
                            className= {darkMode ? "border-dark" : "border"}>
                            {country.name}
                          </button>
                        </Link>
                      )
                    }) :
                    <p> This nation has no border countries</p>
                 }
        </div>
      </div>
    </main>
  );
}

export default SingleCountry;

//

//