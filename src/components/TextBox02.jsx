import './TextBox02';

export default function TextBox02() {
  return (

        <div className="text-box">
          <div className="text-container">
            <img
              src="https://www.hannoversche.de/stgc/assets/images/melanie.webp?v=1.2.0"
              alt="img"
              height="60"
              width="60"
              className="avatar"
            />
              <div className="box-container">
                <p>
                  Sie sind sich unsicher, wie hoch die Versicherungssumme sein
                  sollte? Hier eine kleine Orientierungshilfe: Laut Statistik
                  liegen Bestattungskosten durchschnittlich bei
                  <storng> 6.000 bis 8.000 </storng>
                  Euro. Zusätzlich können weitere Kosten für die
                  Wohnungsauflösung, Grabpflege oder einen Notar anfallen
                </p>
              </div>
            </div>
        </div>
  )
}
