import "./AsideTarif.css";

import { FaCheck } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

export default function Aside() {
  return (
    <section className="section_s">
      <div className="container_s">
        <header className="logo_wrapper">
          <img
            src="https://www.hannoversche.de/resources/assets/images/logo.svg"
            alt="img"
            height="30px"
            width="240px"
          />
        </header>
        <div className="header_text">
          <h2>Tarifrechner</h2>
          <h4>Sterbegeldversicherung</h4>
        </div>

        <article className="article_a">
          <div className="ihr_bedarf">
            <div className="aside_icon_wrapper" >
              <h4 className="titleBedarf">Ihr Bedarf</h4>
              <FaCheck className="fackeck" />
            </div>
              <div id="line" className="line line_1"></div>
          </div>
          <div>
            <div className="aside_icon_wrapper">
              <h4 className="title_t">Ihr Preis</h4>
              <CiLock className="Cilock" />
            </div>

            <div className="line line_2"></div>
          </div>
          <div>
            <div className="aside_icon_wrapper">
              <h4 className="title_t">Online Abschluss</h4>
              <CiLock className="Cilock" />
            </div>

            <div className="line .ine_2 line_3"></div>
          </div>
        </article>
      </div>
    </section>
  );
}
