import { useRouter } from 'next/router'
import en from './en.json'
import ua from './ua.json'

const translations = {
  en,
  ua,
}

export const defaultLang = process.env.NEXT_PUBLIC_DEFAULT_LANG || 'en'

export const langs = Object.keys(translations)

export const useLang = () => {
  const router = useRouter()
  const langId = router.query.lang
  const setLang = (lang) => {
    let langPath = defaultLang === lang ? '' : lang
    const newRoute =
      router.route.search('lang') !== -1
        ? router.route.replace('[lang]', langPath)
        : '/' + langPath

    console.log(newRoute)
    router.push(newRoute)
  }
  const lang = langId || defaultLang
  return { lang, setLang }
}
export const useText = () => {
  const { lang } = useLang()
  return (key) => {
    const t = translations[lang][key] || translations[defaultLang][key]
    if (!t) console.warn('Wrong translation key:', key)
    return t
  }
}
