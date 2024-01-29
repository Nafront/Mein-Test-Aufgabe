import {  useNavigate } from "react-router-dom";
import Aside from "../components/Aside";
import "./TarifPage.css";

export default function TarifPage() {
    const navigate = useNavigate();
    function navigationHandler() {
      navigate("/");
    }
  return (
    <section className="tarif">
      <Aside />
      <div className="container_t">
        <p>
          <button onClick={navigationHandler}>Back</button>
        </p>
        <header className="header_t">
          <h2>61,93 €</h2>
          <h4>Monatlich</h4>
        </header>
        <div className="wrapper">
          <article className="article_t_1">
            <div className="header_article">
              <h1>Ihre Sterbegeldversicherung</h1>
              <p>
                Sie Zahlen monatlich 61.93 € zur Entlastung Ihrer
                Hinterbliebenen.
              </p>
            </div>
            <div className="option_wrapper">
              <div className="option_content">
                <label>Zahlungsweise</label>
                <select className="options">
                  <option value="">Monatlich</option>
                  <option value="">Jahrlich</option>
                </select>
              </div>
              <div className="date">
                <label>Versicherungsbeginn</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="input_date"
                />
              </div>
            </div>
          </article>
          <article className="article_t_2">
            <div className="article_t_2_container">
              <div className="tarif_btn">
                <button type="button">Weiter zum Online-Antrag</button>
              </div>
              <div className="btn_an_wrapper">
                <p className="">
                  Alles klar? Dann geht es jetzt weiter mit den persönlichen
                  Angaben.
                </p>
              </div>
              <div className="checkbox_container">
                <div className="btn_check">
                  <span>icon</span>
                  <p>30 Tage Widerrufsrecht nach Vertragsabschluss</p>
                </div>
                <div className="btn_check">
                  <span>icon</span>
                  <p>Laufender Vertrag jederzeit monatlich kündbar</p>
                </div>
                <div className="btn_check">
                  <span>icon</span>
                  <p>Verdopplung der Versicherungssumme bei Unfalltod</p>
                </div>
              </div>
              <div className="line">
                <p className="span_1"></p>oder<p className="span_2"></p>
              </div>
              <div className="btn_an_wrapper">
                <button className="btn_an">Unverbindliches Angebot anfordern</button>
              <p >Nochmal darüber schlafen? Wie schicken Ihr Angebot auch noch Hause - per Post oder E-Mail</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
