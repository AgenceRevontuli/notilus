import getCurrentUser from "../actions/getCurrentUser"
import Unauthentificate from "../components/Unauthentificate"
import CategoryList from "../components/Notes/CategoryList"
import Link from 'next/link'

export default async function Note() {
  const currentUser = await getCurrentUser()

  if(!currentUser) {
    return <Unauthentificate />
  }

  return (
    <>
      <div className="
        pt-40 
        pb-8 
        px-12 
        flex 
        flex-row 
        justify-between 
        items-center
        border-b-[1px]
        ">
        <h2 className="text-xl font-semibold">Bienvenue {currentUser.name}</h2>
        <div>
          <Link 
            href="/notes/nouvelle-note"
            className="bg-rose-500 py-2 px-4 rounded-full text-white font-semibold"
          >
            Ajoutez une nouvelle note
          </Link>
        </div>
      </div>
      <div className="
        flex 
        flex-row
        gap-16
        items-start
      ">
        <div className="w-2/6 py-4 px-12 border-r-[1px]">
          <h3 className="font-semibold">Vos catégories</h3>
          <CategoryList />
        </div>
        <div className="w-4/6 py-4 px-12">
          hello
        </div>
      </div>
    </>
  )
}
