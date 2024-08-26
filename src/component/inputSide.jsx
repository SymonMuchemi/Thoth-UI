import "./inputSide.css";

function InputSide() {
  return (
    <div className="container">
      <h2>Paste code here:</h2>
      <textarea />
      <h2>Check for:</h2>
      <div className="options">
        <label htmlFor="code-smell">
          <input type="checkbox" name="code-smell" id="code-smell" />
          Code smell
        </label>
        <label htmlFor="Optimization">
          <input type="checkbox" name="optimization" id="optimization" />
          Optimization
        </label>
      </div>
      <div className="buttons">
        <button id="review">Get Code Review</button>
        <button id="github">Get Code from GitHub</button>
      </div>
    </div>
  );
}

export default InputSide;
