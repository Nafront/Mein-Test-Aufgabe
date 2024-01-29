import "./test.css";

export default function test() {
  return (
    <div>
      <input
        type="range"
        id="range-input"
        min="0"
        max="100"
        defaultValue="50"
      />
      <div className="range">
        <div className="range__content">
          <div className="range__slider">
            <div className="range__slider-line" id="range-line"></div>
          </div>

          <div className="range__thumb" id="range-thumb">
            <div className="range__value">
              <span className="range__value-number" id="range-number">
                50
              </span>
            </div>
          </div>

          <input
            type="range"
            className="range__input"
            id="range-input"
            min="0"
            max="100"
            value="50"
            step="1"
          />
        </div>
      </div>
    </div>
  );
}
