import { parseISO, format } from 'date-fns'
import { es, enGB } from 'date-fns/locale'
import { useRouter } from "next/router"

const locales = {en: enGB, es}

export default function Date({ dateString }) {
  const router = useRouter()
  const { locale } = router;
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy', { locale: locales[locale] })}</time>
}
