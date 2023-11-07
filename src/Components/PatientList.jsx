import { useEffect, useState } from "react";
import Patient from "./Patient.jsx";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddPatient from "./AddPatient.jsx";
import Form from "./Form.jsx";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [modal, setModal] = useState(false);

  const emitData = (data) => {
    setPatients([data, ...patients]);
  };

  const emitModal = () => {
    setModal(false);
  };

  useEffect(() => {
    setPatients(JSON.parse(localStorage.getItem("patients")));
  }, []);

  return (
    <div className="patient-list">
      <div className="list-wrapper">
        <div className="addCard patient-card">
          {!modal ? (
            <button
              className="addBtn"
              onClick={() => {
                setModal(!modal);
              }}
            >
              <AddCircleOutlineIcon sx={{ fontSize: 40 }} />
            </button>
          ) : (
            <Form modal={modal} emitData={emitData} emitModal={emitModal} />
          )}
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
