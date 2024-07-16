import React from "react";
import "../CompanyStatus.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CompanyStatusCards() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    // <h1>hello</h1>

    <div className="cards_section">
      <div className="mt-3 ">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="card-container border">
              <div className="card-header">
                <h1 className="text-md font-semibold">{d.heading}</h1>
              </div>
              <div className="card-body flex flex-col gap-y-2">
                <div className="card_info flex justify-between">
                  <button className="text-sm rounded-lg shared">
                    {d.btn1}
                  </button>
                  <h1>5</h1>
                </div>
                <div className="card_info flex justify-between">
                  <button className="text-sm rounded-lg interview">
                    {d.btn2}
                  </button>
                  <h1>5</h1>
                </div>
                <div className="card_info flex justify-between">
                  <button className="text-sm rounded-lg selected">
                    {d.btn3}
                  </button>
                  <h1>5</h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    heading: "Thinksolar",
    btn1: "Shared",
    btn2: "Interview",
    btn3: "Selected",
  },
  {
    heading: "Mark9 Pte Ltd",
    btn1: "Shared",
    btn2: "Interview",
    btn3: "Selected",
  },
  {
    heading: "Bitmapper Integrations",
    btn1: "Shared",
    btn2: "Interview",
    btn3: "Selected",
  },
  {
    heading: "demo",
    btn1: "Shared",
    btn2: "Interview",
    btn3: "Selected",
  },
];

export default CompanyStatusCards;
