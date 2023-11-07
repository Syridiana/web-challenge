import { Input } from "./Input";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@mui/material";

const Form = ({ emitData, emitModal, patient }) => {
  const methods = useForm();

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
            placeholder=""
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
        <Button onClick={onCancel} variant="contained">
          Cancel
        </Button>
      </form>
    </FormProvider>
  );
};

export default Form;
