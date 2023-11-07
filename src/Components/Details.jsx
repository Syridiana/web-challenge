import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPatient from "../DB/fetchPatient.js";

const Details = () => {
    const { id } = useParams();
    const results = useQuery(["details", id], fetchPatient);

    if(results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🐈‍⬛</h2>
            </div>
        );
    }

    const patient = results.data.users[0];

    return (
        <div className="details">
            <div>
                <h1>{patient.name}</h1>
                <h2>{patient.description}</h2>
            </div>
        </div> 
    );
};

export default Details;