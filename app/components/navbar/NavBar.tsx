'use client'
import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container';
import UserMenu from '../navbar/UserMenu';
import { safeUser } from '@/app/types';


interface NavBarProps {
    currentUser?: safeUser | null
}


const NavBar: React.FC<NavBarProps> =({
    currentUser
}) => {
  return (
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                    <div>
                        <Link href="/">
                            <Image
                                src="revontuli-logo.svg"
                                width={65}
                                height={6}
                                alt="Logo de Revontuli"
                            />
                        </Link>
                    </div>
                    <UserMenu currentUser={currentUser} />
                </div>
            </Container>
        </div>
  )
}

export default NavBar

