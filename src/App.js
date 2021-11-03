import React from "react";
import "./App.css";
import Home from "./pages/home";
import BankDetail from "./pages/bankDetail";
import Consumer from "./pages/consumer";
import Consumer2 from "./pages/consumer2";
import Education from "./pages/education";
import GovernmentPageForm from "./pages/governmentPageForm";
import HealthCare from "./pages/healthCare";
import ImageUpload from "./pages/imageUpload";
import MainContact from "./pages/mainContact";
import OwnershipInformation from "./pages/ownershipInformation";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/css-bootsnav.css";
import "./assets/css/css-custom.css";
import "./assets/css/css-style.css";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/bankDetail" component={BankDetail} />
        <Route exact path="/consumer" component={Consumer} />
        <Route exact path="/consumer2" component={Consumer2} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/governmentpageform" component={GovernmentPageForm} />
        <Route exact path="/healthcare" component={HealthCare} />
        <Route exact path="/imageupload" component={ImageUpload} />
        <Route exact path="/maincontact" component={MainContact} />
        <Route exact path="/ownershipinformation" component={OwnershipInformation} />
      </div>
    </BrowserRouter>
  );
}

export default App;
