import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientList from "./Components/PatientList";

const App = () => {
  return (
    <div>
      <h2 id="title">Patient List</h2>
      <BrowserRouter basename="/web-challenge">
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
