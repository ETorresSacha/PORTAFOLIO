import { useState } from "react";

import "./App.css";
import LandingPage from "./components/landingPage/Landing";
import { ThemeProvider } from "@emotion/react";
import theme from "./temaConfig";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;
