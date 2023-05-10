import getCurrentUser from "@/app/actions/getCurrentUser"
import Unauthentificate from "@/app/components/Unauthentificate"
import FormNewNote from "@/app/components/Notes/FormNewNote"

const NouvelleNote = async () => {
    const currentUser = await getCurrentUser()

    if(!currentUser) {
      return <Unauthentificate />
    }
    return(
        <div className="pt-40 pb-20 px-12">
            <div>
                <h2 className="
                    font-semibold
                    text-xl
                    mb-4
                ">Ajoutez une nouvelle note</h2>
            </div>
            <div>
                <FormNewNote />
            </div>
        </div>
    )
}

export default NouvelleNote