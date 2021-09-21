import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../Context";

function SingleCountry() {
  const { allCountries } = useContext(Context);
  const { name } = useParams();

  const country = [...allCountries].find((country) => country.name === name);

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

  const borderCountries = borders.map(border => {
    const nation = [...allCountries].find (
      (country) => country.alpha3Code === border
      )
    return {
      name: nation.name,
      alpha3Code: nation.alpha3Code
    }
  });
 
  return (
    <main className="main-content">
      <div className="back-btn-container">
        <Link to="/">
          <button className="back-btn">
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            Back
          </button>
        </Link>
      </div>
          <div className="detail-container" key={alpha2Code}>
            <div className="detail-page-img-position">
              <img src={flag} alt="country" className="detail-country-img" />
            </div>

            <article className="detail-info-position">
              <h2>{name}</h2>
              <p>Native name: {nativeName}</p>
              <p>Population: {population.toLocaleString('en-US')}</p>
              <p>Region: {region}</p>
              <p>Sub Region: {subregion}</p>
              <p>Capital: {capital}</p>
            </article>

            <div className="extra-detail-position">
              <p>Top Level Domain: {topLevelDomain} </p>
              <p>Currencies: {currencies.map((cur) => cur.name).join(", ")}</p>
              <p>Languages: {languages.map((lan) => lan.name).join(", ")}</p>
            </div>
          
    
          <div className="border-countries-position">
            <p>Border Countries: </p>
            {borderCountries.length > 0 ? (
                    borderCountries.map((country, index) => {
                      return (
                        <Link
                          to={`/singlecountry/${country.name}`}
                          key={index} 
                        >
                          <button
                            className="border">
                            {country.name}
                          </button>
                        </Link>
                      );
                    })
                  ) : (
                <p>This nation has no border country</p>
              )
            }
        </div>
      </div>
    </main>
  );
}

export default SingleCountry;

/*

*/
