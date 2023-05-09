'use client'
import { signIn, signOut } from 'next-auth/react';

export const LoginButton = () => {
    return <button className="bg-white py-2 px-4 text-black rounded" onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000/notes' })}>Connexion</button>
};

export const LogoutButton = () => {
    return <button className="bg-red-600 py-2 px-4 text-white rounded" onClick={() => signOut()}>Déconnexion</button>;
};