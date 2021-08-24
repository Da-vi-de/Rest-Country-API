import React from "react";

function CountryDetail() {
    return(
        <>
         <main className="main-content">

                <div className="back-btn-container">
                    <button className="back-btn">
                        <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                        Back
                    </button>
                </div>

                <div className="detail-container">

                <div className="detail-page-img-position">
                    <img src="" 
                            alt="country image" 
                            className="detail-country-img"/> 
                </div>

                <article className="detail-info-position">
                    <h2>Belgium</h2> 
                    <p>Native name: js code</p>
                    <p>Population: js code</p>
                    <p>Region: js code</p>
                    <p>Sub Region: js code</p>
                    <p>Capital: js code</p>
                </article>

                <div className="extra-detail-position">
                        <p>Top Level Domain: js code</p>
                        <p>Currencies: js code</p>
                        <p>Languages: js code</p>
                </div>

                <div className="border-countries-position">
                    <p>Border Countries:</p>
                    <button>France</button>
                    <button>Germany</button>
                    <button>Netherlands</button>
                </div>
            </div>
         </main> 
        </>
    );
};

export default CountryDetail;