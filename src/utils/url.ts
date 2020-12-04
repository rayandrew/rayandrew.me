export function isSimpleExternalUrl(url: string) {
  const regex = /^https?:\/\//i
  return regex.test(url)
}
