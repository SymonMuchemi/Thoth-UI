import "./App.css";
import Header from "./component/header";
import InputSide from "./component/inputSide";
import ReviewSide from "./component/ReviewSide";
import Footer from "./Footer";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="sides">
        <InputSide />
        <ReviewSide />
      </div>
      <Footer />
    </div>
  );
}

export default App;
