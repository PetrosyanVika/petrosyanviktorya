import React from "react";
import "./Footer.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return <div className="Footer">
    <h1> Discover the world with Traveland. Explore hidden corners and attractions globally, and organize your vacations effortlessly.</h1>
     <div className='Footer__contact'>
      <span>
        <i class="bi bi-telephone-fill"></i>
        Phone:  +1 (800) 123-4567</span>
       <span>
        <i class="bi bi-envelope-at-fill"></i>
        Email: support@traveland.com</span>
      <span>
        <i class="bi bi-geo-alt-fill"></i>
        Address:Traveland Inc. 123 Adventure Lane Wanderlust City, 56789 Country</span>
     </div>
     <div className="Footer__register">
     </div>
  </div>;
}
