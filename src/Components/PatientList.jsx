import { useEffect, useState } from "react";
import Patient from "./Patient.jsx";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddPatient from "./AddPatient.jsx";
import Form from "./Form.jsx";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [modal, setModal] = useState([false]);

  const emitData = (data) => {
    setPatients([data, ...patients]);
  };

  useEffect(() => {
    setPatients(JSON.parse(localStorage.getItem("patients")));
  }, []);

  return (
    <div className="patient-list">
      <Form modal={modal} emitData={emitData} />
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        {" "}
        show Modal{" "}
      </button>
      <div className="list-wrapper">
        <div className="addCard patient-card">
          <AddCircleOutlineIcon sx={{ fontSize: 40 }} />
        </div>
        {!patients ? (
          <h1>No Patients Found</h1>
        ) : (
          patients.map((patient) => {
            return (
              <Patient
                name={patient.name}
                id={patient.id}
                description={patient.description}
                avatar={patient.avatar}
                key={patient.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default PatientList;
