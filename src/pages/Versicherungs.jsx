import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../components/AppContext";
import { FaChevronLeft } from "react-icons/fa6";
import TextBox02 from "../components/TextBox02";
import Aside from "../components/Aside";
import Slider from "../components/Slider";
import Button from "../ui/Button";
import "./Versicherungs.css";

export default function Versicherungs() {
  const { geburtsdatum, sliderValue, setApiResponse } =
    useAppContext();

  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("/");
  };

  const handleSubmit = async () => {
    const dataToSend = {
      tarif: {
        name: "sterbegeld",
      },
      versicherungsnehmer: {
        geburtsdatum,
        geschlecht: "m",
      },
      vertragsdaten: {
        endalter: 85,
        versicherungsbeginn: "01.10.2023",
        versicherungssumme: sliderValue,
        zahlungsweise: "monatlich",
      },
    };

    const url = "https://t3a.hannoversche.de/api/v2/taa/quote";
    try {
      const response = await axios.post(url, dataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Axios automatically checks for response.ok
      const responseData = response.data;

      // Speichern Sie die API-Antwort im globalen Zustand/Context
      setApiResponse(responseData);

      navigate("tarif");
    } catch (error) {
      console.error("Fehler beim Senden der Daten:", error);
      if (error.response) {
        console.error("Serverantwort", error.response.data);
        console.error("Statuscode:", error.response.status);
      } else if (error.request) {
        console.error("Keine Antwort vom Server erhalten:", error.request);
      } else {
        console.error("Fehler beim Aufbau des Requests:", error.message);
      }
    }
  };

  return (
    <section className="section_v">
      <Aside />
      <div className="container_v">
        <div className="icon_wrapper">
          <FaChevronLeft onClick={navigationHandler} className="back_icon" />
        </div>
        <header className="title">
          <h1>
            Wie hoch soll die <strong>Versicherung</strong> sein?
          </h1>
        </header>
        <div className="range">
            <div className="sliderValue">
              <span className="value_slider">{sliderValue} </span>
              <span className="euro">€ </span>
            </div>
            <div id="slider_span"></div>
          <div className="field">
            <Slider />
          </div>
        </div>
        <TextBox02 />

        <div className="container-next">
          <Button className="next_btn" onClick={handleSubmit}>
            Weiter
          </Button>
        </div>
      </div>
    </section>
  );
}
