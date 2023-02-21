import { memo, useEffect, useState } from "react"

import getDevicesNames from "../helpers/getDevicesNames"

export const DisplayFilesName = memo(({setFormState}) => {
  const [visible, setVisible] = useState(false);
  const [filesName, setFilesName] = useState({abr: [], names: []});

  const getTableRows = ({abr, names}) => {
    const tableRowList = [];
  
    for(let i in abr) {
      tableRowList.push(
        <tr key={abr[i]}>
          <td>{names[i]}</td>
          <td
            style={{cursor: 'pointer'}}
            onClick={() => setFormState( {fileName: abr[i]} )}
          >
            {abr[i]}
          </td>
        </tr>
      );
    }
  
    return tableRowList.map(e => e);
  }

  useEffect(() => {
    getDevicesNames().then((resp) => {
      const abr = Object.keys(resp.content);
      const names = Object.values(resp.content);

      setFilesName({abr, names});
    });
  }, [])
  

  return (
    <div style={{position: 'fixed', top: '10px', right: '5px', display: 'flex', flexDirection: 'column', border: '3px solid black'}}>
      <button
        onClick={() => setVisible(!visible)}
        style={{minWidth: '40px', height: '40px', cursor: 'pointer'}}
      >🔎</button>

      <div className="namesTable__container">
        <table hidden={!visible}>
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Archivo</th>
            </tr>
          </thead>
          <tbody>
            {
              getTableRows(filesName)
            }
          </tbody>
        </table>
      </div>

    </div>
  )
})

