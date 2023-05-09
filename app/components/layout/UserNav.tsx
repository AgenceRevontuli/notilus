'use client'
import { LoginButton, LogoutButton } from '../auth/authButtons';
import { useSession } from 'next-auth/react'

export default function UserNav() {
    const { data:session } = useSession()
  return (
    <li>
        {session? (
            <LogoutButton />
        )
        : (
            <LoginButton />
        )}
    </li>
  )
}
