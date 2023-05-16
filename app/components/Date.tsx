import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

type DateProps = {
    dateString: any
}

export default function Date( { dateString }: DateProps) {
    const dateFR = format(dateString, 'dd MMMM yyyy', {locale: fr})
  return (
    <p>{dateFR}</p>
  )
}