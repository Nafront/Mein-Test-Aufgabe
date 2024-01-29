// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../components/AppContext";
import TextBox02 from "../components/TextBox02";
import Aside from "../components/Aside";
import Slider from "../components/Slider";
import Button from "../ui/Button";
import "./Versicherungs.css";

export default function Versicherungs() {
  const { geburtsdatum, sliderValue, setSliderValue, setApiResponse } =  useAppContext();

  const navigate = useNavigate();
  function navigationHandler() {
    navigate("/");
  }


  const handleSubmit = async () => {
     const dataToSend = {
       tarif: {
         name: "sterbegeld",
       },
       versicherungsnehmer: {
         geburtsdatum: geburtsdatum, // Annahme, dass geburtsdatum bereits im korrekten Format ist, z.B. "18.02.1973"
         geschlecht: "m", // Sie müssen eine Möglichkeit hinzufügen, das Geschlecht zu erfassen und hier einzufügen
       },
       vertragsdaten: {
         endalter: 85,
         versicherungsbeginn: "01.10.2023", // Dies sollte dynamisch gesetzt oder vom Benutzer ausgewählt werden können
         versicherungssumme: sliderValue, // Verwendung des Wertes aus dem Slider
         zahlungsweise: "monatlich", // Dies könnte auch dynamisch gesetzt oder vom Benutzer ausgewählt werden
       },
     };
    // console.log('dataToSend: ', dataToSend);
    // console.log("tarif: ", dataToSend.tarif);

    const url =  "https://t3a.hannoversche.de/api/v2/taa/quote";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Netzwerkantwort war nicht ok.");
      }

      const responseData = await response.json();
      // console.log('responseData : ' , responseData);

      // Speichern Sie die API-Antwort im globalen Zustand/Context
      setApiResponse(responseData);

      navigate("/tarif");
    } catch (error) {
  console.error("Fehler beim Senden der Daten:", error);
  if (error.response) {
    // Der Server hat eine Antwort mit einem Fehlerstatus zurückgegeben
    console.error("Serverantwort:", error.response.data);
    console.error("Statuscode:", error.response.status);
  } else if (error.request) {
    // Der Request wurde gesendet, aber keine Antwort erhalten
    console.error("Keine Antwort vom Server erhalten:", error.request);
  } else {
    // Ein Fehler beim Aufbau des Requests
    console.error("Fehler beim Aufbau des Requests:", error.message);
  }
}
  };

  return (
    <section className="section_v">
      <Aside />
      <div className="container_v">
        <p>
          <button onClick={navigationHandler}>Back</button>
        </p>
        <header className="title">
          <h1>
            Wie hoch soll die <strong>Versicherung</strong> sein?
          </h1>
        </header>
        <div className="range">
          <div className="sliderValue">
            <span>{sliderValue} </span>
          </div>
          <div className="field">
            <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
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
