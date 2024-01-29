import  { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import "./Home.css"; 
import TextBox01 from '../components/TextBox01';
import Aside from '../components/Aside';

export default function Home() {
  const navigate = useNavigate();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (validateInput()) {
      navigate(`/naechste-seite?day=${day}&month=${month}&year=${year}`);
      // navigate("/versicherungs");
    }
  };

  const validateInput = () => {
    if (!day || !month || !year) {
      setError("Bitte fülle alle Felder aus.");
      return false;
    }

    const numericDay = parseInt(day, 10);
    const numericMonth = parseInt(month, 10);
    const numericYear = parseInt(year, 10);

    if (
      isNaN(numericDay) ||
      isNaN(numericMonth) ||
      isNaN(numericYear) ||
      numericDay < 1 ||
      numericDay > 31 ||
      numericMonth < 1 ||
      numericMonth > 12 ||
      numericYear < 1900
    ) {
      setError("Ungültige Eingabe. Bitte überprüfe die Daten.");
      return false;
    }

    const currentDate = new Date();
    const userBirthdate = new Date(
      `${numericYear}-${numericMonth}-${numericDay}`
    );

    const userAge = currentDate.getFullYear() - userBirthdate.getFullYear();

    if (userAge < 50 || userAge > 80) {
      setError("Das Geburtsdatum muss zwischen 50 und 80 Jahren liegen.");
      return false;
    }

    setError("");
    return true;
  };

  return (
    <section id="section_geburt">
      <Aside />
      <div className="container">
        <div className="headline">
          <h1>
            Zum Start benötigen wir <strong>Ihr Geburtsdatum</strong>
          </h1>
        </div>
        <form className="form">
          <div className="form-container">
            <div className="form-element">
              <input
                type="number"
                name=""
                className="input in_1"
                placeholder="Tag"
                onChange={(e) => setDay(e.target.value)}
              />
              <input
                type="number"
                name=""
                className="input in_1"
                placeholder="Monat"
                min="1"
                max="12"
                onChange={(e) => setMonth(e.target.value)}
              />
              <input
                type="number"
                name=""
                className="input in_2"
                placeholder="Jahr"
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}
        </form>
        <TextBox01 />

        <div className="container-next">
          <Link to="/versicherungs">
            <button className="next_btn" onClick={handleNext}>
              <span>Weiter</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

