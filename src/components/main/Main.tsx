import React from "react";
import Opinions from "./Opinions";

import head1 from "../../images/head1.png";
import feta1 from "../../images/feta1.png";
import head2 from "../../images/head2.png";
import "./main.scss";
import Footer from "../footer/Footer";

const Main = () => {
  return (
    <>
      <header className="header-main">
        <article className="head-text">
          {" "}
          <h1>
            Pyszne domowe <br />
            jedzenie i nie tylko!
          </h1>
          <p>
            Easybar oferuje coś dla każdego. Znajdziesz u nas smaczne domowe
            obiady, jedyne w swoim rodzaju schabburgery oraz pyszne pierogi
            ręcznie lepione przez naszych kucharzy. Wszystko w przystępnych
            cenach. Wszystkie dania przygotowywane są według naszych przepisów,
            z regionalnych produktów od zaufanych dostawców. Nasze posiłki są
            zawsze świeże, dlatego codziennie znajdziesz u nas coś nowego!
          </p>
        </article>
        <img src={head1} alt="wątróbka" className="head-img1"></img>
        <img src={head2} alt="kotlet" className="head-img2"></img>
        <span className="head-circle"></span>
        <span className="head-circle2"></span>
        <span className="head-square"></span>
        <span className="head-orn"></span>
      </header>
      <article className="main-feta">
        <img src={feta1} alt="feta" />
        <span className="feta-lines"></span>
        <span className="feta-circle1"></span>
        <span className="feta-circle2"></span>

        <aside>
          {" "}
          <h1>Feta 2022</h1>
          <h3>
            Kolejny raz mieliśmy możliwość zapewnienia wyżywienia dla aktorów i
            organizatorów Festawalu Teatrów Ulicznych FETA
          </h3>
          <button className="main-button">
            Dowiedz się więcej
          </button>
        </aside>
      </article>

      <Opinions/>

      <div className="feed-text">
        <h1>
            Znajdź nas na facebooku
        </h1>
        <h3>i bądź na bieżąco</h3>
        <span className="feed-circle"></span>
  
      </div>
      <div id="curator-feed-default-feed-layout"></div>
    <Footer/>
    </>
  );
};

export default Main;
