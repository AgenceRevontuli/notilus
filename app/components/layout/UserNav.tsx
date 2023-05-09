'use client'
import { LoginButton, LogoutButton } from '../auth/authButtons';
import { useSession } from 'next-auth/react'
import { ProfilePicture } from '../profile/profile';
import Link from 'next/link'

export default function UserNav() {
    const { data:session } = useSession()
  return (
    <li>
        {session? (
            <div className="flex flex-row gap-5 items-center">
              <Link href="/notes">
                Mes notes
              </Link>
              <ProfilePicture />
              <LogoutButton />
            </div>
        )
        : (
            <div>
              <LoginButton />
            </div>
        )}
    </li>
  )
}
