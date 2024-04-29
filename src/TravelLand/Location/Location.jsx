import React, { useState } from "react";
import "./Location.scss";

export default function Location() {
  const [card, setCard] = useState([
    {
      id: 1,
      image: "./imageblog1.jpg",
      title: "Istanbul, Turkey",
      description: "Istanbul is a major city in Turkey that straddles Europe. ",
    },
    {
      id: 2,
      image: "./imageblog2.jpg",
      title: "Kuala Lumpur, malaysia",
      description: "A 272-step long trek leads you to this century.",
    },
    {
      id: 3,
      image: "./imageblog3.png",
      title: "Seoul, South Korea",
      description:
        "South Korea officially the Republic of Korea is a country in East Asia.",
    },
  ]);
  return (
    <div className="Location">
      <h1>Popular Location</h1>
      <p>
        For every one of us, travel came first. We've spent years living as
        nomads, pioneers, and voyagers— from island hopping in the
      </p>
      <div className="Location__content">
        {card.map((elm) => {
          return (
            <div key={elm.id} className="Location__cards">
              <img src={elm.image} alt="" />
              <div className="Location__about">
                <h6>{elm.title}</h6>
                <p>{elm.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
