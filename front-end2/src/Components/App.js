import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Context from "../Context/Context";

import Header from "./shared/Header.js"

import SignIn from "../Components/pages/SignIn.js"
import Schedule from "../Components/pages/Schedule.js"
import ShowClients from "../Components/pages/ShowClients.js"
import CreateClient from "../Components/pages/CreateClient.js"
import ShowServices from "../Components/pages/ShowServices.js"
import CreateService from "../Components/pages/CreateService.js"
import ShowProfessionals from "../Components/pages/ShowProfessionals.js"
import CreateProfessional from "../Components/pages/CreateProfessional.js"
import ClientProfile from "../Components/pages/ClientProfile.js"
import NewSchedule from "../Components/pages/NewSchedule.js"

export default function App() {
  const [token, setToken] = React.useState("");

  return (
    <>
      <Context.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/showClients" element={<ShowClients />} />
            <Route path="/createClient" element={<CreateClient />} />
            <Route path="/showServices" element={<ShowServices />} />
            <Route path="/createService" element={<CreateService />} />
            <Route path="/showProfessionals" element={<ShowProfessionals />} />
            <Route path="/createProfessional" element={<CreateProfessional />} />
            <Route path="/clientProfile" element={<ClientProfile />} />
            <Route path="/newSchedule" element={<NewSchedule />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}