import { useState, useEffect, useRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Form from "./Form";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Patient = ({ name, description, avatar, id }) => {
  const [showFullDescription, setFullDescription] = useState(false);
  const [modal, setModal] = useState(false);

  const [patient, setPatient] = useState({
    name: name,
    description: description,
    avatar: avatar,
  });

  const patientCardRef = useRef();

  useEffect(() => {
    gsap.from(patientCardRef.current, {
      y: -20,
      opacity: 0,
      delay: 0.075 * id,
      duration: 0.5,
      ease: "power1.out",
    });
  }, []);

  const emitData = (data) => {
    setPatient(data);
    setModal(false);
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
    <motion.div
      className="patient-card"
      ref={patientCardRef}
      transition={{ duration: 0.2 }}
      layout
    >
      {!modal ? (
        <div>
          <div className="identity-wrapper">
            <img
              src={hero}
              alt={patient.name}
              onError={(e) => {
                e.target.src =
                  "https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif";
              }}
            />
            <h3 className="name">{patient.name}</h3>
          </div>
          <p>{desc}</p>
          <div className="btnWrapper">
            {patient.description.length > 120 ? (
              <motion.button
                whileHover={{
                  x: 10,
                  transition: { duration: 0.5 },
                }}
                className="textbtn"
                onClick={showFullDescriptionHandler}
              >
                Read {showFullDescription ? "Less" : "More"}
              </motion.button>
            ) : (
              <span></span>
            )}
            <motion.button
              whileHover={{
                scale: 1.2,
                rotate: 15,
                transition: { duration: 0.5 },
              }}
              className="customBtn"
              onClick={() => setModal(true)}
            >
              <EditIcon className="editIcon" />
            </motion.button>
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
    </motion.div>
  );
};

export default Patient;
