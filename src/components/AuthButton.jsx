import React from 'react'
import { LogInButton } from './LogInButton'
import { AUTH } from '../utils/constants'
import { UserBadge } from './UserBadge'

export const AuthButton = ({ user }) => {
  if ( user.authState === AUTH.authenticated )
    return <UserBadge user={ user }/>

  if ( user.authState === AUTH.notAuthenticated )
    return <LogInButton/>

  return (
    <div>...</div>
  )
}
