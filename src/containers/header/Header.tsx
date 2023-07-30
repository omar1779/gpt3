import React, { useState } from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  const [animate, setAnimate] = useState(false);
  const handleImageClick = () => {
    setAnimate(true);

    // Después de un tiempo, restablecer el estado para que la animación se pueda reproducir nuevamente en el próximo clic
    setTimeout(() => {
      setAnimate(false);
    }, 600); // Asegúrate de establecer el tiempo aquí para que coincida con la duración de la animación (0.6s = 600ms).
  };
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div
        className={`gpt3__header-image ${
          animate ? "slide-in-blurred-top" : ""
        }`}
        onClick={handleImageClick}
      >
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
