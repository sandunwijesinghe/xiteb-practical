import React from "react";
import "./destinations.css";

function Destinations() {
  const options = [
    { id: 1, option: "Cinnamon Life" },
    { id: 2, option: "Cinnamon Lakeside Colombo" },
    { id: 3, option: "Cinnamon Red Colombo" },
    { id: 4, option: "Cinnamon Bentota Beach" },
    { id: 5, option: "Cinnamon Bey Beruwala" },
    { id: 6, option: "Hikka Tranz by Cinnamon" },
    { id: 7, option: "Cinnamon Grand Colombo" },
  ];

  return (
    <div className="dest-main">
      <div className="dest-container">
        <div className="dest-sub-container1">
          <h3 className="dest-title">Our Destinations</h3>
          <div className="dest-selection-container">
            <select name="destinations" id="">
              {" "}

{options.map(({id,option})=>( <option id={id} value="" className="dest-selection-options">
                {option}
                <hr/>
              </option>
           
              ))}

             
            </select>
          </div>
        </div>
        <div className="dest-sub-container2">
          <div className="dest-box">
            <div className="srilanka">
              <img
                src="https://www.cinnamonhotels.com/themes/cinnamon/images/srilanka.png"
                alt=""
              />
            </div>
            <div className="banner">
              <img
                src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/cinnamon-life-home-715x550.jpg"
                alt=""
              />
            </div>
            <div className="dest-card">
              <h5>Cinomen Life</h5>
              <p className="dest-card-description">
                Take a peak at the first-ever Integrated Resort in Sri Lanka.
                Envisoned to be the epicentre of modern South Asia, it is an
                urban sanctuary which includes a 5-Star hotel, residential
                units, office spaces and a wide range of shopping and
                entertainment options
              </p>
              <p className="dest-card-btn">
                <a href="/">Discover More</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
