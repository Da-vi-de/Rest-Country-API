import React, { Fragment } from "react";

function Card() {
    return(
        <div className="country-card">

            <div className="country-preview">
                <img src="" alt="Chosen country flag" className="image"/> 
            </div>

            <div className="country-info">

                <div class="country-detail">

                <div className="country-title">
                  <h3>Germany</h3>
                </div>

                <p>Population: JS code goes here</p>
                <p>Region: JS code goes here</p>
                <p>Capitol: JS code goes here</p>
              </div>
            </div>
        </div>
    );
};

export default Card;