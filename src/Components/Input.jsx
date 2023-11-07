import { useFormContext } from "react-hook-form";
import findInputError from "../utils/findInputError";
import isFormInvalid from "../utils/isFormInvalid";
import { TextField } from "@mui/material";

export const Input = ({ label, type, id, placeholder, value }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div>
      <br></br>
      <TextField
        label={label}
        multiline
        id={id}
        type={type}
        placeholder={placeholder}
        fullWidth
        defaultValue={value}
        {...register(label, {
          required: {
            value: true,
            message: "required",
          },
        })}
      />
      {isInvalid && (
        <InputError
          message={inputError.error.message}
          key={inputError.error.message}
        />
      )}
    </div>
  );
};

const InputError = ({ message }) => {
  return <p className="errorMsg"> {message}</p>;
};
