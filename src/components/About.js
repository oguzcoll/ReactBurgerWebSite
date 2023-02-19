import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          cupiditate fuga est fugiat perspiciatis nesciunt facere voluptas
          provident reiciendis? Cumque laboriosam aperiam optio totam delectus
          corrupti, sit esse fugiat rerum?

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          cupiditate fuga est fugiat perspiciatis nesciunt facere voluptas
          provident reiciendis? Cumque laboriosam aperiam optio totam delectus
          corrupti, sit esse fugiat rerum?

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          cupiditate fuga est fugiat perspiciatis nesciunt facere voluptas
          provident reiciendis? Cumque laboriosam aperiam optio totam delectus
          corrupti, sit esse fugiat rerum?
        </p>
      </div>
    </div>
  );
}

export default About;
