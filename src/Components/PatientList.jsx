import Results from "./Results.jsx";
import { useEffect, useState } from "react";

const PatientList = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        setPatients(JSON.parse(localStorage.getItem('patients')));
      }, []);


    return (
        <div className="search-params">
            <Results patients={patients} />
        </div>
    )
}

export default PatientList;