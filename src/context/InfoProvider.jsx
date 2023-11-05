import { useState } from "react";
import { InfoContext } from "./InfoContext";

import extractImeiInfo from "../utils/extractImeiInfo";
import { sortDevicesByModel } from "../utils/sortDevices";
import { useForm } from "../hook/useForm";

import { AUTH } from "../utils/constants";
import { logoutUser, signInWithGoogle } from "../firebase";

export const InfoProvider = ({children}) => {

  // Usuario logueado
  const [ user, setUser ] = useState({
    authState: AUTH.checking, // 'cheking', 'authenticated', 'not-authenticated'
    email: null,
    photoURL: null,
    displayName: null,
  });

  // Acción LogIn con Google usando Firebase
  const onLogIn = async () => {
    const { ok, result } = await signInWithGoogle();

    if( !ok )
      console.log('Error al iniciar sesión')
  }

  // Acción LogOut usando Firebase
  const onLogOut = async () => {
    const { ok } = await logoutUser();

    if ( !ok )
      console.log('Error al cerrar sesión')
  }

  // Lista de IMEI escritos en el TextBlock. String.
  const [imei, setImei] = useState();

  // Lista de IMEI agrupados por modelo. Array de objects.
  // { model: "", imeiList: [ 13123,123123, 123123 ], saved: false, selected: false}
  const [devices, setDevices] = useState([]);

  // Lista de IMEI inválidos. Array de strings.
  const [invalidIMEI, setInvalidIMEI] = useState([]);


  // Estado de visibilidad del componente de administración de certificados
  const [ manageCertsVisible, setManageCertsVisible ] = useState( false );

  // Cambia el estado de visibilidad del componente de administración de certificados
  const toggleManageCerts = () => {
    setManageCertsVisible( !manageCertsVisible );
  }


  // Estado del input para poner nombre al archivo 
  const { onInputChange, fileName, setFormState } = useForm();

  // Cambia el estado de selección de los embarques de equipos
  const onSelectedChange = (model) => {
    const devicesCopy = [...devices];

    for(let e of devicesCopy)
      if(e.model == model){
        e.selected = !e.selected;
        break;
      }

    setDevices(devicesCopy);
  }

  const onSetImei = (imeiInfo) => {
    setImei(imeiInfo);

    if( !imeiInfo ) return;

    const {devices, invalidIMEI} = extractImeiInfo(imeiInfo);

    sortDevicesByModel(devices);

    setDevices(devices);
    setInvalidIMEI(invalidIMEI);
  }
  

  const value = {
    user, setUser, onLogIn, onLogOut,
    manageCertsVisible, toggleManageCerts,
    imei, onSetImei,
    devices, setDevices,
    onSelectedChange,
    invalidIMEI,
    onInputChange, fileName, setFormState
  }

  return (
    <InfoContext.Provider value={ value }>
      { children }
    </InfoContext.Provider>
  )
}