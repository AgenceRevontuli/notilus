'use client'
import axios from "axios";
import { AiOutlineGoogle } from 'react-icons/ai'
import { useCallback, useState } from 'react'
import { 
    FieldValue, 
    FieldValues, 
    SubmitHandler, 
    useForm 
} from 'react-hook-form'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
    const RegisterModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '', 
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post('/api/register', data)
            .then(() => {
                RegisterModal.onClose()
            })
            .catch((error) => {
                toast.error('Something went wrong')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Bienvenue sur Notilus"
                subtile="Créez votre compte"
                center
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="Votre prénom"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="password"
                label="Mot de passe"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="continuer avec Google"
                icon={AiOutlineGoogle}
                onClick={() => signIn('google')}
            />
            <div className="
                text-neutral-500
                text-center
                mt-4
                font-light
            ">
                <div className="flex flex-row items-center gap-2 justify-center">
                    <div>
                    Vous avez déjà un compte ?
                    </div>
                    <div 
                    onClick={RegisterModal.onClose}
                    className="
                        text-neutral-800
                        cursor-pointer
                        hover:underline
                    ">
                    Connectez-vous
                    </div>
                </div>
            </div>
        </div>
    )

    return(
        <Modal
            disable={isLoading}
            isOpen={RegisterModal.isOpen}
            title="S'inscrire"
            actionLabel="Continue"
            onClose={RegisterModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal