import { FaCheck } from "react-icons/fa6";

import "./TarifBoxContent.css";
export default function TarifBoxContent({ monatlicherBeitrag }) {
  return (
    <section className="box_section">
      <article className="article_t_1">
        <div className="header_article">
          <h1>Ihre Sterbegeldversicherung</h1>
          <p>
            Sie Zahlen <span>monatlich {monatlicherBeitrag} €</span> zur
            Entlastung Ihrer Hinterbliebenen.
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
            <input type="date" id="date" name="date" className="input_date" />
          </div>
        </div>
      </article>
      <article className="article_t_2">
        <div className="article_t_2_container">
          <div className="tarif_btn">
            <button className="antrag_btn" type="button">
              Weiter zum Online-Antrag
            </button>
          </div>
          <div className="btn_an_wrapper">
            <p className="box_text_btn">
              Alles klar? Dann geht es jetzt weiter mit den persönlichen
              Angaben.
            </p>
          </div>
          <div className="checkbox_container">
            <div className="btn_check">
              <FaCheck className="icon_check" />
              <p>30 Tage Widerrufsrecht nach Vertragsabschluss</p>
            </div>
            <div className="btn_check">
              <FaCheck className="icon_check" />
              <p>Laufender Vertrag jederzeit monatlich kündbar</p>
            </div>
            <div className="btn_check">
              <FaCheck className="icon_check" />

              <p>Verdopplung der Versicherungssumme bei Unfalltod</p>
            </div>
          </div>
          <div className="line">
            <p className="span_1"></p>
            <span className="oder">oder</span>
            <p className="span_2"></p>
          </div>
          <div className="btn_an_wrapper">
            <button className="btn_an">
              Unverbindliches Angebot anfordern
            </button>
            <p>
              Nochmal darüber schlafen? Wie schicken Ihr Angebot auch noch Hause
              - per Post oder E-Mail
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
