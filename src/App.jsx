import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PatientList from "./Components/PatientList";
import { useEffect } from "react";
import fetchPatientList from "./DB/fetchPatientList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
});



const App = () => {

  useEffect(() => {
    fetchPatientList();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to="">Patient List</Link>
          </header>
          <Routes>
            <Route path="/" element={<PatientList />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  )
};

  const container = document.getElementById('root');

  
  const root = createRoot(container);
  root.render(<App />);