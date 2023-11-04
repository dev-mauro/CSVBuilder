import { memo, useContext, useEffect, useState } from "react"

import { InfoContext } from "../context/InfoContext";
import { getCerts } from "../helpers/getCerts";

export const DisplayFilesName = memo(() => {
  const { setFormState } = useContext( InfoContext );

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
    getCerts().then((resp) => {
      // nombres de modelos
      const names = resp.map(e => e.modelo);

      // nombres de modelos abreviados (nombre archivo)
      const abr = resp.map(e => e.modelo_abr);

      setFilesName({abr, names});
    });
  }, [])
  

  return (
    <div
      className="display-filesNames"
    >
      <button
        className="button"
        onClick={() => setVisible(!visible)}
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

