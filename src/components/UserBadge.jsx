import { AUTH } from "../utils/constants"

export const UserBadge = ({ user }) => {
  if( user.authState != AUTH.authenticated ) return ( <></> );

  return (
    <div className="user-badge">
      <img src={ user.photoURL } alt={ user.displayName }/>
      <div>
        <span>¡Bienvenido!</span>
        <span>{ user.displayName }</span>
      </div>
    </div>
  )
}
