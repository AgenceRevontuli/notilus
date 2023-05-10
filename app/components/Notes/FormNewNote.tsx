'use client'
import Input from "../inputs/Input"
import { 
    FieldValues, 
    SubmitHandler, 
    useForm 
} from 'react-hook-form'
import Button from "../Button"

const FormNewNote = () => {

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '', 
            password: '',
        }
    })

    return(
        <form action="" className="flex flex-col gap-4">
            <Input
                register={register}
                label="Entrez votre titre"
                errors={errors}
                id="title"
            />
            <Input
                register={register}
                label="Ajoutez du contenu"
                errors={errors}
                id="content"
            />
            <Button 
                label="Enregistrer ma note"
            />
        </form>
    )
}

export default FormNewNote