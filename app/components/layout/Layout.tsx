import Image from 'next/image';
import Link from 'next/link'

export const Header = () => {
    return(
        <header className="p-12">
            <nav className="flex flex-row justify-between items-center">
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
                <ul className="flex flex-row gap-5">
                    <li>Home</li>
                    <li>Mes notes</li>
                </ul>
            </nav>
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