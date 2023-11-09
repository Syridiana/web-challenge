import { motion } from "framer-motion";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Form from "./Form.jsx";

const AddPatient = ({ modal, setModal, emitDataAdd, emitModal }) => {
  const emitData = (data) => {
    emitDataAdd(data);
  };

  return (
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
  );
};

export default AddPatient;
