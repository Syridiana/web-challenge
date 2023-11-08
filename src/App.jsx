import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import PatientList from "./Components/PatientList";
import { useEffect, useState } from "react";
import fetchPatientList from "./DB/fetchPatientList";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPatientList().then(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2 id="title">Patient List</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PatientList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);
root.render(<App />);
