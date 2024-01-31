import { useNavigate } from "react-router-dom";
import TextBox01 from "../components/TextBox01";
import Aside from "../components/Aside";
import Button from "../ui/Button";
import InputField from "../components/InputField";
import { useAppContext } from "../components/AppContext";
import "./Home.css";

export default function Home() {
  const { setGeburtsdatum, error, setError, formData, setFormData } =
    useAppContext();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (validateInput()) {
      const { day, month, year } = formData;
      setGeburtsdatum(`${day}.${month}.${year}`);

      navigate("/versicherungs");
    }
  };

  // Überprüft, ob eines der Felder leer ist. Wenn ja, wird ein Fehler gesetzt und false zurückgegeben.
  const validateInput = () => {
    const { day, month, year } = formData;
    if (!day || !month || !year) {
      setError("Bitte fülle alle Felder aus.");
      return false;
    }

    // Konvertiert die Eingaben in Zahlen, um sie leichter verarbeiten zu können
    const numericDay = parseInt(day, 10);
    const numericMonth = parseInt(month, 10);
    const numericYear = parseInt(year, 10);

    // Erstellt ein neues Date-Objekt basierend auf den Benutzereingaben
    const userBirthdate = new Date(numericYear, numericMonth - 1, numericDay);

    // Überprüfung auf ungültige Daten (z.B. 30. Februar)
    // Überprüft, ob das erstellte Datum gültig ist, indem es mit den ursprünglichen Eingaben verglichen wird.
    // Dies fängt ungültige Daten wie den 30. Februar ab.
    if (
      userBirthdate.getFullYear() !== numericYear ||
      userBirthdate.getMonth() + 1 !== numericMonth ||
      userBirthdate.getDate() !== numericDay
    ) {
      setError("Bitte geben Sie ein gültiges Datum im Format TT.MM.JJJJ ein.");
      return false;
    }

    // Erstellt ein aktuelles Datum-Objekt, um das aktuelle Jahr zu erhalten
    const currentDate = new Date();
    // Das Alter des Benutzers berechnen, indem das Geburtsjahr subtrahiert wird
    let userAge = currentDate.getFullYear() - userBirthdate.getFullYear();
    // Überprüfen, ob der Geburtstag dieses Jahr bereits vergangen ist
    const isBirthdayPassedThisYear =
      currentDate.getMonth() > userBirthdate.getMonth() ||
      (currentDate.getMonth() === userBirthdate.getMonth() &&
        currentDate.getDate() >= userBirthdate.getDate());
    if (!isBirthdayPassedThisYear) {
      userAge--; // Wenn der Geburtstag dieses Jahr noch nicht war, ein Jahr abziehen
    }

    // Überprüft, ob das Alter des Benutzers zwischen 50 und 80 Jahren liegt
    if (userAge < 50 || userAge > 80) {
      setError("Das Geburtsdatum muss zwischen 50 und 80 Jahren liegen.");
      return false;
    }

    // Wenn alle Überprüfungen erfolgreich waren, wird der Fehlerzustand geleert und true zurückgegeben
    setError("");
    return true;
  };

  return (
    <section
      id="section_geburt"
      // style={{ padding: "20px" }}
    >
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
              <InputField
                type="number"
                name="day"
                placeholder="Tag"
                value={formData.day}
                onChange={handleInputChange}
                error={error}
              />
              <InputField
                type="number"
                name="month"
                placeholder="Monat"
                value={formData.month}
                onChange={handleInputChange}
                error={error}
              />
              <InputField
                type="number"
                name="year"
                placeholder="Jahr"
                value={formData.year}
                onChange={handleInputChange}
                error={error}
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
          <Button className="next_btn" onClick={handleNext}>
            <span>Weiter</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
