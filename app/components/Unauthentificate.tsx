'use client'
import Button from "./Button"

const Unauthentificate = () => {
    return(
        <div className="h-screen flex flex-col justify-center items-center px-12 gap-8 text-center">
            <h2 className="text-semibold text-xl">Vous devez être connecté pour voir cette page.</h2>
            <div className="w-4/6">
                <Button 
                    label="Revenir à la page d'accueil"
                />
            </div>
        </div>
    )
}

export default Unauthentificate