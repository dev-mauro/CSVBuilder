import { ImeiTextArea, ResultContainer, LogInButton } from './components';
import { SaveDevices } from './components/SaveDevices';
import { InvalidImeiContainer } from './components/InvalidImeiContainer';

import { useEffect, useState } from 'react';
import { useCheckCredentials } from './hook/useCheckCredentials';
import { AuthButton } from './components/AuthButton';
import { PrivateComponents } from './components/PrivateComponents';
import { checkAllowedEmail } from './helpers/checkAllowedEmail';
import { LogOutButton } from './components/LogOutButton';
import { AUTH } from './utils/constants';


function App() {

  const { user } = useCheckCredentials();
  const [ authorized, setAuthorized ] = useState( false );

  useEffect(() => {
    checkAllowedEmail( user.email )
      .then( authorized => setAuthorized( authorized ));
  }, [ user ])

  return (
    <div className="app">
      <AuthButton user={ user }/>
      <ImeiTextArea />
      <InvalidImeiContainer/>
      <ResultContainer />
      <SaveDevices/>
      
      <div className="footer">
        { ( user.authState === AUTH.authenticated ) ? <LogOutButton/> : '' }
        { ( authorized ) ? <PrivateComponents/> : '' }
      </div>
    </div>
  )
}

export default App
