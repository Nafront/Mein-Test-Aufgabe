import { useNavigate } from "react-router-dom";
import { useAppContext } from "../components/AppContext";
import { FaChevronLeft } from "react-icons/fa6";
import AsideTarif from "../components/AsideTarif";
import "./TarifPage.css";
import TarifBoxContent from "../components/TarifBoxContent";

export default function TarifPage() {
  const { apiResponse, setIsLoading } = useAppContext();
  // console.log("api : ", apiResponse);

  const navigate = useNavigate();

  // Extrahieren des monatlichen Beitrags aus der API-Antwort
  const monatlicherBeitrag =
    apiResponse.hauptprodukt?.sterbegeld?.beitraege?.monatlich?.netto;

  // Hilfsfunktion zur Formatierung von Zahlen
  function formatNumberWithDot(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  setIsLoading(false); // Setzt den Ladezustand zurück, bevor Sie navigieren

  function navigationHandler() {
    navigate("/versicherungs");
  }

  return (
    <section className="tarif">
      <AsideTarif />
      <div className="container_t">
        <div className="icon_wrapper">
          <FaChevronLeft onClick={navigationHandler} className="back_icon" />
        </div>
        <header className="header_t">
          <h1 className="tarif_beitrag">
            {monatlicherBeitrag
              ? `${formatNumberWithDot(monatlicherBeitrag)} €`
              : ""}
          </h1>
          <h4>Monatlich</h4>
        </header>
        <div className="wrapper_box">
          <div className="rotate"></div>
          <TarifBoxContent monatlicherBeitrag={monatlicherBeitrag} />
        </div>
      </div>
    </section>
  );
}
