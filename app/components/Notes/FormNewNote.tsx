'use client'
import Input from "../inputs/Input"
import Button from "../Button"
import postNote from "@/app/actions/notesActions"
import { useState } from 'react'

type StateTitle = {
    title: string
}

type StateContent = {
    content: string
}

const FormNewNote = () => {
    const [title, setTitle] = useState<StateTitle>({title: ''});
    const [content, setContent] = useState<StateContent>({content: ''});

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        if(e.currentTarget.id === 'title') {
            setTitle({title: e.currentTarget.value})
        } else if (e.currentTarget.id === 'content') {
            setContent({content: e.currentTarget.value})
        }
    }

    const formSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
            postNote(title.title, content.content)
    }

    return(
        <form className="flex flex-col gap-4">
            <Input
                onChange={handleChange}
                label="Entrez votre titre"
                id="title"
            />
            <Input
                label="Ajoutez du contenu"
                id="content"
                onChange={handleChange}
            />
            <Button 
                onClick={formSubmit}
                label="Enregistrer ma note"
            />
        </form>
    )
}

export default FormNewNote