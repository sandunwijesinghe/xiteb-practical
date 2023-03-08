import React from "react";
import "./offers.css";
function Offers() {
  const offers = [
    {
      id: 1,
      imgUrl:
        "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/2/9/%7B32926B10-8EE8-4639-B2DD-AC55F70CB76D%7Dslcwithbreakfast.jpg?w=360&h=175&mode=crop&quality=100&scale=both",
      title: "Shangri–La Circle Exclusive Member Rate with Breakfast",
      description:
        "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
      price: "61,124.40",
    },
    {
      id: 2,
      imgUrl:
        "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/8/B/%7BA8B2E679-6D4A-497F-95C4-A905821952F5%7Dslcmemberrate.jpg?w=360&h=175&mode=crop&quality=100&scale=both",
      title: "Shangri–La Circle Exclusive Member Rate",
      description: "Exclusive Member Rate for Shangri-La Circle member.",
      price: "54,332.80",
    },
    {
      id: 3,
      imgUrl:
        "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/4/8/3/%7B4835D553-4207-4DFC-B256-52D227A8066B%7D201201_SLCB_APNewOffer.jpg?w=360&h=175&mode=crop&quality=100&scale=both",
      title: "Book Early and Save with Flexibility",
      description:
        "Book in advance and save up to 15% with complimentary date changes.",
      price: "62,822.30",
    },
  ];

  return (
    <div className="offer-main-container">
      <div className="offer-sub-container">
        <h2 className="title">Offers</h2>

        <div className="content-box">
          {offers.map(({ id, imgUrl, title, description, price }) => (
            <div id={id} className="offer-items">
              <div className="offer-img">
                <img src={imgUrl} alt="" />
                <p className="offer-img-txt">Member Exclusive</p>
              </div>

              <div className="offer-section">
                <p className="offer-type">Rooms & Suites</p>
                <p className="offer-title">{title}</p>
                <p className="offer-description">{description}</p>
                <div className="offer-price">
                  <div className="offer-price-text">
                    From  <span className="highlight">LKR {price}</span>Average
                    Per Night
                  </div>
                </div>
                <button className="offer-details">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offers;
