import { Input } from "./Input";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@mui/material";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Form = ({ emitData, emitModal, patient }) => {
  const methods = useForm();

  const formRef = useRef();

  useEffect(() => {
    gsap.from(formRef.current, {
      y: -10,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
    });
  }, []);

  const onSubmit = methods.handleSubmit((data) => {
    data.id = crypto.randomUUID();
    emitData(data);
  });

  const onCancel = () => {
    emitModal(false);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className="container"
        ref={formRef}
      >
        <div className="formGroup">
          <Input
            label="name"
            id="name"
            name="name"
            type="text"
            placeholder=""
            value={patient?.name}
          />

          <Input
            label="avatar"
            id="avatar"
            name="avatar"
            type="avatar"
            placeholder="avatar URL"
            value={patient?.avatar}
          />
        </div>
        <Input
          label="description"
          id="description"
          name="description"
          type="text"
          placeholder=""
          className="descriptionBox"
          value={patient?.description}
        />
        <br />
        <Button onClick={onSubmit} variant="contained">
          Submit
        </Button>
        &nbsp;&nbsp;
        <Button onClick={onCancel} variant="contained" color="error">
          Cancel
        </Button>
      </form>
    </FormProvider>
  );
};

export default Form;
