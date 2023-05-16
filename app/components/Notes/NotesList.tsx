import { prisma } from "@/app/lib/prismadb"
import Date from "../Date"

const NotesList = async () => {

    const notes = await prisma.note.findMany({
        where:{
            authorId: "clhgshflc00062jcun18colsj"
        }
    })
   

    return(
        <ul className="flex flex-row gap-3">
            {notes.map(note => (
                <li 
                    key={note.id}
                    className="border rounded-md py-2 px-4"
                >
                    <h3 className="text-xl">{note.title}</h3>
                    <Date dateString={note.createdAt} />
                </li>
            ))}
        </ul>
    )
}

export default NotesList