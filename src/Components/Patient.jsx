import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Form from "./Form";

const Patient = ({ name, description, avatar }) => {
  const [showFullDescription, setFullDescription] = useState(false);
  const [modal, setModal] = useState(false);
  const [patient, setPatient] = useState({
    name: name,
    description: description,
    avatar: avatar,
  });

  const emitData = (data) => {
    setPatient(data);
  };

  const emitModal = () => {
    setModal(false);
  };

  const showFullDescriptionHandler = () => {
    setFullDescription(!showFullDescription);
  };

  const desc = showFullDescription
    ? patient.description
    : patient.description.slice(0, 120);

  let hero = "";

  if (patient.avatar) {
    hero = patient.avatar;
  }

  return (
    <div className="patient-card">
      {!modal ? (
        <div>
          <div className="identity-wrapper">
            <img src={hero} alt={patient.name} />
            <h3 className="name">{patient.name}</h3>
          </div>
          <p>{desc}</p>
          <div className="btnWrapper">
            <button className="textbtn" onClick={showFullDescriptionHandler}>
              Read {showFullDescription ? "Less" : "More"}
            </button>
            <button className="customBtn" onClick={() => setModal(true)}>
              <EditIcon sx={{ fontSize: 20 }} />
            </button>
          </div>
        </div>
      ) : (
        <Form
          modal={modal}
          emitData={emitData}
          emitModal={emitModal}
          patient={patient}
        />
      )}
    </div>
  );
};

export default Patient;
