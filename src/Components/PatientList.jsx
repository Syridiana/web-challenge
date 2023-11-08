import { useEffect, useState } from "react";
import Patient from "./Patient.jsx";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Form from "./Form.jsx";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [modal, setModal] = useState(false);
  const notifySuccess = () => toast("Success!");

  const emitData = (data) => {
    setPatients([data, ...patients]);
    notifySuccess();
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
            <motion.button
              className="addBtn"
              onClick={() => {
                setModal(!modal);
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
                backgroundColor: "#0174BE",
                color: "white",
              }}
            >
              <AddCircleOutlineIcon sx={{ fontSize: 40 }} />
            </motion.button>
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
      <ToastContainer />
    </div>
  );
};

export default PatientList;
