import React from "react";
import Banner from "../assets/banner.png";
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı Soyadınızı giriniz"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen Emailinizi giriniz"
          />
          <label>Mesajınız</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Lütfen mesajınızı giriniz"
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact