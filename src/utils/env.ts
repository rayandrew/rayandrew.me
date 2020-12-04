const nodeEnv = process.env.NODE_ENV

export const isDev = nodeEnv === 'development'

export const isProd = nodeEnv === 'production'

export const isTest = nodeEnv === 'test'
