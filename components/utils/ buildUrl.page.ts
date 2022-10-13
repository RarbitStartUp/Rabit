import { BASE_URL } from '../../pages/constants/index.page'

export function buildUrl(path: string, params: URLSearchParams) {
  return `${BASE_URL}${path}?${params.toString()}`
}
