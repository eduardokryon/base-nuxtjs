/**
 * Composable central de SEO.
 * Padroniza meta tags, Open Graph, Twitter Cards, canonical URL e JSON-LD.
 *
 * @param {Object} opts
 * @param {string} opts.title - Título da página
 * @param {string} opts.description - Meta description
 * @param {string} opts.path - Caminho da página (ex: '/blog/meu-post')
 * @param {string} opts.type - Tipo OG (website, article, etc)
 * @param {string} opts.image - URL da imagem OG
 * @param {string} opts.robots - Diretiva robots (default: 'index,follow')
 * @param {string[]} opts.keywords - Array de palavras-chave
 * @param {object|object[]} opts.schema - Objeto(s) JSON-LD Schema.org
 */
export const usePageSeo = ({
  title,
  description,
  path,
  type = 'website',
  image,
  robots = 'index,follow',
  keywords = [],
  schema = []
} = {}) => {
  const route = useRoute()
  const config = useRuntimeConfig()

  const siteUrl = computed(() => {
    const url = String(config.public.siteUrl || '').trim().replace(/\/+$/, '')
    return url || 'https://meusite.com.br'
  })

  const normalizedPath = computed(() => {
    const rawPath = String(path || route.path || '/').trim() || '/'
    if (rawPath === '/') return '/'
    return rawPath.replace(/\/+$/, '')
  })

  const canonicalUrl = computed(() =>
    `${siteUrl.value}${normalizedPath.value === '/' ? '' : normalizedPath.value}`
  )

  const hasImage = computed(() => Boolean(image))
  const imageUrl = computed(() => {
    if (!image) return ''
    return String(image).startsWith('http') ? String(image) : `${siteUrl.value}${image}`
  })

  const safeTitle = String(title || 'Início').trim()
  const safeDescription = String(
    description || 'Descrição do projeto.'
  ).trim()
  const safeKeywords = Array.isArray(keywords) ? keywords.join(', ') : String(keywords || '')

  useSeoMeta({
    title: safeTitle,
    description: safeDescription,
    keywords: safeKeywords,
    robots,
    googlebot: robots,
    ogType: type,
    ogTitle: safeTitle,
    ogDescription: safeDescription,
    ogUrl: canonicalUrl,
    ogImage: hasImage.value ? imageUrl : undefined,
    ogLocale: 'pt_BR',
    ogSiteName: 'Nome do Projeto',
    twitterCard: 'summary_large_image',
    twitterTitle: safeTitle,
    twitterDescription: safeDescription,
    twitterImage: hasImage.value ? imageUrl : undefined
  })

  useHead(() => ({
    link: [
      { rel: 'canonical', href: canonicalUrl.value }
    ],
    script: (Array.isArray(schema) ? schema : [schema])
      .filter(Boolean)
      .map((item, index) => ({
        key: `ld-json-${index}`,
        type: 'application/ld+json',
        innerHTML: JSON.stringify(item)
      }))
  }))

  return { siteUrl, canonicalUrl }
}
