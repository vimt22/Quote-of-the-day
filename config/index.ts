import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Quote of the day',
  description: 'write me a quote so I can read in the morning to motivate myself to live my life better.',
  copyright: 'A22 Studio',
  privacy_policy: 'https://myappterms.com/EF5Y2Z/1/en',
  default_language: 'en-US',
}

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
