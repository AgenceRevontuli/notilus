'use server'
import { prisma } from "../lib/prismadb"

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