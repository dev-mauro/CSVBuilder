import { useState } from "react"

export const useForm = (initialForm, blankSpaceAllowed = false) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({target}) => {
    let {value, name} = target;

    if( !blankSpaceAllowed) {
      value = value.replace(".", "");
      value = value.replace(" ", "");
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  const onFormReset = () => {
    setFormState( initialForm );
  }

  return {
    onInputChange,
    formState,
    setFormState,
    onFormReset,
    ...formState,
  }
}