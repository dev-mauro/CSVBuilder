import { useState } from "react"

export const useForm = (initialForm) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({target}) => {
    let {value, name} = target;

    value = value.replace(".", "");
    value = value.replace(" ", "");

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  return {
    onInputChange,
    formState,
    ...formState,
  }
}