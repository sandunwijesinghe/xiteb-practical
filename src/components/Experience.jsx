import React from "react";
import "./experience.css";

function Experience() {
  const images = [
    {
      id: 1,
      imgUrl:
        "https://www.hilton.com/im/en/MBJRHHF/16722849/2021-lifestyle-shoot-at-hilton-rose-hall-resort-spa-an-all-inclusive-resort.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=640&rh=426",
      title: "JOIN HILTON HONORS & gET UP TO 4,500 POINTS",
    },
    {
      id: 2,
      imgUrl:
        "https://www.hilton.com/im/en/SJDLCHH/3254503/family-pool.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=640&rh=426",
      title: "BOOK AHEAD & SAVE UP TO 17%",
    },
    {
      id: 3,
      imgUrl:
        "https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=640&rh=426",
      title: "MULTIPLY YOUR POINTS",
    },
    {
      id: 4,
      imgUrl:
        "https://www.hilton.com/im/en/NoHotel/13984175/cheers-5000x3333.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=640&rh=426",
      title: "FREE BONUS POINTS AT NEW HOTELS",
    },
    {
      id: 5,
      imgUrl:
        "https://www.hilton.com/im/en/NoHotel/16156655/shutterstock-673616299.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=640&rh=426",
      title: "PARK & STAY WITH HILTON",
    },
    {
      id: 6,
      imgUrl:
        "https://www.hilton.com/im/en/NoHotel/14530273/f-por-157-heroimage-crop3-2.jpg?impolicy=crop&cw=1500&ch=1000&gravity=NorthWest&xposition=0&yposition=0&rw=640&rh=426",
      title: "MAKE YOUR STAY EVEN SWEETER",
    },
  ];

  return (
    <div className="main-container">
      <div className="sub-container">
        <section>
          <div className="content-box">
            <h2>Hello, spring savings!</h2>
            <div className="subtitle-container">
              <p>
                Put a spring in your step with our exclusive offers and deals.
              </p>
            </div>
            <div className="image-container">
              <div className="featured">
                {images.map(({ id, imgUrl, title }) => (
                  <div id={id} className="featuredItem">
                    <img className="featuredImg" src={imgUrl} alt="" />
                    <div className="gradient-overlay"></div>

                    <div className="featuredTitles">
                    <h1>{title}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Experience;
