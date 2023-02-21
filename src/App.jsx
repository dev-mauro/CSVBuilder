import { ImeiTextArea, ResultContainer } from './components';
import { SaveDevices } from './components/SaveDevices';
import { DisplayFilesName } from './components/DisplayFilesName';
import { InvalidImeiContainer } from './components/InvalidImeiContainer';
import { useForm } from './hook/useForm';

const containerStyle = {
  padding: '10px',
  position: 'relative'
}

function App() {

  const { onInputChange, fileName, setFormState } = useForm();

  return (
    <div style={ containerStyle }>
      <ImeiTextArea />
      <InvalidImeiContainer/>
      <ResultContainer />
      <SaveDevices
        onInputChange={onInputChange}
        fileName={fileName}
      />
      <DisplayFilesName 
        setFormState={setFormState}
      />
    </div>
  )
}

export default App
