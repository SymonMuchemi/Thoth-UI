import "./App.css";
import Header from "./component/header";
import InputSide from "./component/inputSide";
import ReviewSide from "./component/ReviewSide";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="sides">
          <InputSide />
          <ReviewSide />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
