import "./Slider.css";
import { useAppContext } from "./AppContext";

export default function SliderComponent() {
  const { sliderValue, setSliderValue } = useAppContext();

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);
  };

  const handleSliderBlur = () => {
    // Runden auf den nächsten Schritt von 500
    const roundedValue = Math.round(sliderValue / 500) * 500;
    if (roundedValue < 4000) {
      setSliderValue(4000);
    } else if (roundedValue > 15000) {
      setSliderValue(15000);
    } else {
      setSliderValue(roundedValue);
    }
  };

  const calculateGradient = () => {
    const progress = ((sliderValue - 4000) / (15000 - 4000)) * 100;
    return `linear-gradient(to right, #002D5D ${progress}%, #ccc ${progress}%)`;
  };

  return (
    <div className="">
      <input
        type="range"
        min="4000"
        max="15000"
        step="500"
        value={sliderValue}
        onChange={handleSliderChange}
        onMouseUp={handleSliderBlur}
        className="custom-slider"
        style={{ background: calculateGradient() }}
      />
      <div className="zahl_wrapper">
        <span className="value left">4000 €</span>
        <span className="value right">15000 €</span>
      </div>
    </div>
  );
}
