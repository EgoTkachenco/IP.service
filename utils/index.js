import { langs } from '@/locales'

export async function getLangPaths() {
  return {
    fallback: false,
    paths: langs.map((lang) => ({
      params: { lang },
    })),
  }
}
