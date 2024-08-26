import "./inputSide.css";

function InputSide() {
  return (
    <div>
      <h2>Paste code here:</h2>
      <textarea />
      <h2>Check for:</h2>
      <div className="options">
        <input type="checkbox" name="code-smell" id="code-smell" />
        <label htmlFor="code-smell">Code smell</label>
        <input type="checkbox" name="optimization" id="optimization" />
        <label htmlFor="Optimization">Optimization</label>
      </div>
      <div className="buttons">
        <button>Get Code Review</button>
        <button>Get Code from GitHub</button>
      </div>
    </div>
  );
}

export default InputSide;
