import React from "react";
import Form from "./Form";

const AddPatient = ({ modal }) => {
  if (/* modal !== true */ false) {
    return null;
  }
  return <Form></Form>;
};

export default AddPatient;
