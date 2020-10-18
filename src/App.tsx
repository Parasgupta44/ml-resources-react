import React from "react";
import Footer from "./components/Footer";
import Main from "./containers/Main";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Main />
      <Footer />
    </div>
  );
};

export default App;
