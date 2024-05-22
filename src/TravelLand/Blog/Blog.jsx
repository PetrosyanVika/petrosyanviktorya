import React, { useState } from "react";
import { newsBlog } from "./newsBlog";
import "./Blog.scss";

const Blog=()=> {
  const [blog] = useState([
    {
      id: 1,
      image: "./blogimage1.png",
      title: "Banff National Park",
      description:
        "Banff National Park lies in the heart of the majestic Rocky Mountains in the province of Alberta, and showcases some of Canadas most beautiful scenery. Turquoise-colored lakes, snow-capped peaks, and glaciers are all easily accessible",
      link: "@thomasalva_adison",
    },
  ]);
  const [news] = useState(newsBlog);
  return (
    <div className="Main">
      <h1>From Blog & News</h1>
      <p>
        Welcome to Community Conversations, a new interview series featuring
        Intrepid travellers, creatives and activists in our community.
      </p>
      <div className="Blog">
        <div className="Blog__part1">
          {blog.map((elm) => {
            return (
              <div key={elm.id}>
                <img src={elm.image} />
                <h6>{elm.title}</h6>
                <span>{elm.description}</span>
                <p>{elm.link}</p>
              </div>
            );
          })}
        </div>
        <div className="Blog__part2">
          {news.map((elm) => {
            return (
              <div key={elm.id} className="blog-item">
                <img src={elm.image} alt="" />
                <div className="text-content">
                  <h6>{elm.title}</h6>
                  <p>{elm.desc}</p>
                  <span>{elm.link}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Blog