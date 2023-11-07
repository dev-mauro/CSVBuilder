import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

export const PrivateComponents = ({ children }) => {

  const { authorized } = useContext( InfoContext );

  if( authorized )
    return <>{ children }</>

  return;
}
