'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export const ProfilePicture = () => {
    const { data: session } = useSession()
    return <div>
    <Image 
      src={session? (session?.user?.image) : ("Account")}
      alt={`${session?.user?.name}`}
      width={40}
      height={40}
      className="rounded-full"
    />
  </div>;
};
