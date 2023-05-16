'use server'
import { prisma } from "../lib/prismadb"

// Server Action for publish a new note 
const postNote = async (title: string, content: string) => {
    const note = await prisma.note.create({
        data: {
            title: title,
            content: content,
            author: {
                connect:{
                    id: "clhgshflc00062jcun18colsj"
                }
            }
        },
    })
}
export default postNote


// Server Action for fetch user articles
export const getNotes = async () => {
    const notes = await prisma.note.findMany()
}