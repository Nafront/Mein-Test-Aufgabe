import "./Button.css";

export default function Button({ onClick, children }) {
  return (
    <div className="container-next">
      <button className="next-btn" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
