import React from "react";
import { Input } from "./Input";
/* import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material"; */
import { useForm, FormProvider } from "react-hook-form";

const Form = ({ emitData }) => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    data.id = crypto.randomUUID();
    emitData(data);
  });

  /*   const [requestParams, setRequestParams] = useState({
    name: "",
    description: "",
    avatar: "",
  }); */

  /*   const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarErr, setAvatarErr] = useState(""); */
  /*   const { controlName, controlDescription, controlAvatar } = useFormContext(); */

  return (
    /*     <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
          name: formData.get("name") ?? "",
          description: formData.get("description") ?? "",
          avatar: formData.get("avatar") ?? "",
          id: crypto.randomUUID(),
        };
        emitData(obj);
      }}
    > */
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className="container"
      >
        <Input
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
        />

        <Input
          label="Description"
          id="description"
          name="description"
          type="text"
          placeholder="Description"
          className="descriptionBox"
        />

        <Input
          label="Avatar"
          id="avatar"
          name="avatar"
          type="avatar"
          placeholder="Avatar"
        />

        <button onClick={onSubmit}>Submit</button>
      </form>
    </FormProvider>
  );
};

export default Form;
