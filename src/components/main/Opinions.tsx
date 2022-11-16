import React from "react";
import Slider from "react-slick";
import "./main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./opinions.scss";

const Opinions = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    autoplayspeed: 500,
    infiniite: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="opinions">
      <Slider {...settings}>
        <div className="opinions-box">
          <h1 className="opinions-title">Marcin</h1>
          <p className="opinions-text">
            Bardzo dobry obiad w solidnej porcji. Do tego pyszny bonus w postaci
            sernika i pierożków na spróbowanie. Wszystko świeże i gorące. Pycha
          </p>
          <div className="star-holder">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div className="opinions-box">
          <h1 className="opinions-title">Anonimowy</h1>
          <p className="opinions-text">
            Polecam! Zamówiłam schabowego. Kotlet ogromny i bardzo dobry. Rosół
            bardzo dobry
          </p>
          <div className="star-holder">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div className="opinions-box">
          <h1 className="opinions-title">Dorota</h1>
          <p className="opinions-text">
            Bardzo dobry placek po cygańsku a dostawa dokładnie na tę godzinę,
            na którą zamawialiśmy
          </p>
          <div className="star-holder">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div className="opinions-box">
          <h1 className="opinions-title">Sylwia</h1>
          <p className="opinions-text">
            Kolejne zamówienie i kolejny gigantyczny plus. Szybka dostawa, duża
            porcja, wszystko świeże. Super! Na pewno zamówię znowu
          </p>
          <div className="star-holder">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div className="opinions-box">
          <h1 className="opinions-title">Anonimowy</h1>
          <p className="opinions-text">
            Dewolaj z masłem pierwsza klasa, wszystko dotarło gorące
          </p>
          <div className="star-holder">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div className="opinions-box">
          <h1 className="opinions-title">Wojciech</h1>
          <p className="opinions-text">
            Dobre domowe jedzenie, duże porcje oraz niskie ceny. Polecam
          </p>
          <div className="star-holder">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Opinions;
