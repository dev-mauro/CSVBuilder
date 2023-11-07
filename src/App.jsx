import { ImeiTextArea, ResultContainer, LogInButton } from './components';
import { SaveDevices } from './components/SaveDevices';
import { InvalidImeiContainer } from './components/InvalidImeiContainer';

import { useEffect, useState } from 'react';
import { useCheckCredentials } from './hook/useCheckCredentials';
import { AuthButton } from './components/AuthButton';
import { checkAllowedEmail } from './helpers/checkAllowedEmail';
import { LogOutButton } from './components/LogOutButton';
import { AUTH } from './utils/constants';
import { CertsManage } from './components/CertsManage';
import { PrivateComponents } from './components/PrivateComponents';
import { DisplayFilesName } from './components/DisplayFilesName';


function App() {

  const { user } = useCheckCredentials();

  return (
    <div className="app">
      <AuthButton user={ user }/>
      <ImeiTextArea />
      <InvalidImeiContainer/>
      <ResultContainer />
      <SaveDevices/>
      
      <PrivateComponents>
        <CertsManage />
        <DisplayFilesName />
      </PrivateComponents>

      <div className="footer">
        { ( user.authState === AUTH.authenticated ) ? <LogOutButton/> : '' }
      </div>
    </div>
  )
}

export default App
