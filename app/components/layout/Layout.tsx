import NavBar from '../navbar/NavBar';
import { safeUser } from '@/app/types';

interface HeaderProps {
    currentUser: safeUser | null
}

export const Header: React.FC<HeaderProps> = ({
    currentUser
}) => {
    return(
        <header className="fixed w-full bg-white z-10 shadow-sm">
            <NavBar currentUser={currentUser} /> 
        </header>
    )
}

export const Footer = () => {
    return(
        <footer className="p-12 bg-slate-200 font-sans">
            <div className="text-center text-slate-600 text-sm font-semibold">
                © 2023 - Développement par Tristan TORNATORE - Notilus by Revontuli 🦊 
            </div>
        </footer>
    )
}