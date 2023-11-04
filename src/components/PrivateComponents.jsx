import { DisplayFilesName } from "./DisplayFilesName"
import { DownloadCertsButton } from "./DownloadCertsButton"
import { DownloadModelButton } from "./DownloadModelButton"

export const PrivateComponents = () => {
  return (
    <div className="private-components">
      <DownloadCertsButton/>
      <DownloadModelButton/>
      <DisplayFilesName/>
    </div>
  )
}
