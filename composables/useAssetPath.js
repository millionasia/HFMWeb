export const useAssetPath = () => {
  const config = useRuntimeConfig()

  const assetPath = (path) => {
    if (!path || /^(?:https?:|data:|mailto:|tel:|#)/.test(path)) return path

    const baseURL = config.app.baseURL || '/'
    const base = baseURL.endsWith('/') ? baseURL : `${baseURL}/`
    return `${base}${String(path).replace(/^\/+/, '')}`
  }

  return { assetPath }
}
