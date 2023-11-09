import { useEffect, useState } from "react";
import Patient from "./Patient.jsx";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Form from "./Form.jsx";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fetchPatientList from "../DB/fetchPatientList.js";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const notifySuccess = () => toast("Success!");

  const emitData = (data) => {
    setPatients([data, ...patients]);
    notifySuccess();
  };

  const emitModal = () => {
    setModal(false);
  };

  useEffect(() => {
    fetchPatientList().then((res) => {
      setPatients(res);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner-container loading addPatient">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="patient-list">
        <motion.div className="list-wrapper">
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
        </motion.div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default PatientList;
