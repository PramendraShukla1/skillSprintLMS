/* eslint-disable */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import AuthPage from "./pages/auth";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
