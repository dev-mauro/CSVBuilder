import { ImeiTextArea, ResultContainer } from './components';
import { SaveDevices } from './components/SaveDevices';
import { InvalidImeiContainer } from './components/InvalidImeiContainer';

import { useCheckCredentials } from './hook/useCheckCredentials';
import { AuthButton } from './components/AuthButton';
import { LogOutButton } from './components/LogOutButton';
import { AUTH } from './utils/constants';
import { CertsManage } from './components/CertsManage';
import { PrivateComponents } from './components/PrivateComponents';
import { DisplayFilesName } from './components/DisplayFilesName';
import { RemoveImeisModal } from './components/removeImeisModal';
import { useForm } from './hook/useForm';
import { useState } from 'react';

function App() {

  const { user } = useCheckCredentials();

  const { textAreaValue, setFormState,  onInputChange } = useForm({
    textAreaValue: ''
  }, true);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <AuthButton user={ user }/>
      <ImeiTextArea 
        value={textAreaValue}
        onChange={onInputChange}
      />
      <InvalidImeiContainer/>
      <ResultContainer />
      <SaveDevices/>
      <RemoveImeisModal
        textAreaValue={textAreaValue}
        setFormState={setFormState}
        isOpen={isOpen}
        onCloseModal={() => setIsOpen(false)}
      />
      
      <PrivateComponents>
        <CertsManage />
        <DisplayFilesName />
      </PrivateComponents>

      <div className="footer">
        <button
          className="button"
          onClick={() => setIsOpen(true)}
        >
            Borrar Imeis
        </button>
      </div>
    </div>
  )
}

export default App
