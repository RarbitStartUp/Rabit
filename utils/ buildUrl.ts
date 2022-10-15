import { BASE_URL } from '../components/constants/index'

export const buildUrl = (path: string, params: URLSearchParams) =>
  `${BASE_URL}${path}?${params.toString()}`
