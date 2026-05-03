export const formatDate = (pubDate: string) => {
  const date = new Date(pubDate)
  return date.toLocaleDateString('uk-UA', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}