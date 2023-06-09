'use client'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { useCallback, useState } from 'react'
import MenuItems from './MenuItems'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import { signOut } from 'next-auth/react'
import { safeUser } from '@/app/types'
import Link from 'next/link'

interface UserMenuProps {
    currentUser?: safeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

  return (
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <Link href="/notes">
            <div
                onClick={() => {}}
                className="
                hidden
                md:block
                text-sm
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                cursor-pointer
                "
            >
                Mon espace de notes
            </div>
            </Link>
            <div
                onClick={toggleOpen}
                className="
                    p-4
                    md:py-1
                    md:px-2
                    border-[1px]
                    border-neutral-200
                    flex
                    flex-row
                    items-center
                    gap-3
                    rounded-full
                    cursor-pointer
                    hover:shadow-md
                    transition
                "
            >
                <AiOutlineMenu />
                <div className="hidden md:block">
                    <Avatar src={currentUser?.image} />
                </div>
            </div>
        </div>
        {isOpen && (
            <div className="
                absolute
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-white
                overflow-hidder
                right-0
                top-12
                text-sm
            ">
                <div className="
                    flex
                    flex-col
                    cursor-pointer
                ">
                    {currentUser ? (
                    <>
                        <MenuItems
                            onClick={() => {}}
                            label="Tableau de bord"
                        />
                        <MenuItems
                            onClick={() => {}}
                            label="Mon profil"
                        />
                        <hr/>
                        <MenuItems
                            onClick={() => signOut()}
                            label="Déconnexion"
                            addonClassName="text-red-500"
                        />
                    </>
                    ) : (
                    <>
                        <MenuItems
                            onClick={loginModal.onOpen}
                            label="Connexion"
                        />
                        <MenuItems
                            onClick={registerModal.onOpen}
                            label="Inscription"
                        />
                    </>
                    )}
                    
                </div>
            </div>
        )}
    </div>
  )
}
export default UserMenu