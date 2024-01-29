import "./Aside.css";
import { PiPhoneCall } from "react-icons/pi";
import { MdPermIdentity } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";




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
            <h4>Ihr Bedarf</h4>
            <div className="line line_1"></div>
          </div>
          <div>
            <h4 className="title_t">Ihr Preis</h4>
            <div className="line line_2"></div>
          </div>
          <div>
            <h4 className="title_t">Online Abschluss</h4>
            <div className="line .ine_2 line_3"></div>
          </div>
        </article>
        <article className="article_b">
          <div className="Per_info_1">
            <div className="info_icon">
              <span className="icon_1 icon_in">
                <PiPhoneCall className="icon" />
              </span>
            </div>
            <div className="info">
              <p>
                <strong>0511.956 56 56</strong>
              </p>
              <p>Wir helfen Ihnen gerne weiter!</p>
            </div>
          </div>
          <div className="Per_info_2">
            <div className="info_icon">
              <span className="icon_2 icon_in">
                <MdPermIdentity className="icon per_1" />
                <MdPermIdentity className="icon per_2" />
              </span>
            </div>
            <div className="info">
              <p className="info_p_2">
                Persönliche Antragsberatung
              </p>
              <p className="info_p_2">
                <span className="icon_3">
                  <SlArrowRight className="icon_z" />
                </span>
                Jetzt Lotsen wählen
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
