import { BASE_URL } from '../constants/index'

export function buildUrl(path: string, params: URLSearchParams) {
  return `${BASE_URL}${path}?${params.toString()}`
}
