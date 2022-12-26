import { ImeiTextArea, ResultContainer } from './components';
import { SaveDevices } from './components/SaveDevices';
import { DisplayFilesName } from './components/DisplayFilesName';
import { InvalidImeiContainer } from './components/InvalidImeiContainer';

const containerStyle = {
  padding: '10px',
  position: 'relative'
}

function App() {
  return (
    <div style={ containerStyle }>
      <ImeiTextArea />
      <InvalidImeiContainer/>
      <ResultContainer />
      <SaveDevices/>
      <DisplayFilesName />
    </div>
  )
}

export default App
