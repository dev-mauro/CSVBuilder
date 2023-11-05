import React from 'react'
import { LogInButton } from './LogInButton'
import { AUTH } from '../utils/constants'
import { UserBadge } from './UserBadge'
import { ManageCertsButton } from './ManageCertsButton'

export const AuthButton = ({ user, authorized }) => {
  if ( user.authState === AUTH.authenticated )
    return (
      <>
        <UserBadge user={ user }/>
        { ( authorized ) ? <ManageCertsButton /> : '' }
      </>
    )

  if ( user.authState === AUTH.notAuthenticated )
    return <LogInButton/>

  return (
    <div>...</div>
  )
}
