/// <reference types="cypress" />

// ***********************************************************
// This example plugins/index.ts can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

import fs from 'fs-extra'
import path from 'path'

type Json = Record<string, unknown>

const rootDir = path.resolve('.')
const appDir = path.resolve('..')
const appConfigPath = path.resolve(appDir, '.env')
const appLocalConfigPath = path.resolve(appDir, '.env.local')
const defaultConfigPath = path.resolve(rootDir, 'cypress.json')
const environmentConfigPath = path.resolve(rootDir, `cypress.${process.env.NODE_ENV ?? 'development'}.json`)

async function readJsonFile<T extends Json>(path: string): Promise<T> {
  try {
    if (!fs.existsSync(path)) return {} as T
    return fs.readJSON(path)
  } catch {
    return Promise.resolve({} as T)
  }
}

async function parseEnvFile<T extends Json>(path: string): Promise<T> {
  try {
    if (!fs.existsSync(path)) return {} as T
    const file = await fs.readFile(path)
    const content = file.toString()
    const lines = content
      .split('\n')
      .filter(Boolean)
      .filter(line => !line.startsWith('#'))
    const final = lines.reduce<Record<string, string>>((acc, currentValue) => {
      const [key, value] = currentValue.split('=')
      acc[key] = value
      return acc
    }, {})
    return Promise.resolve(final as T)
  } catch {
    return Promise.resolve({} as T)
  }
}

const config: Cypress.PluginConfig = async (on, config) => {
  const defaults = await readJsonFile<Cypress.ConfigOptions>(defaultConfigPath)
  const environments = await readJsonFile<Cypress.ConfigOptions>(environmentConfigPath)
  const defaultEnvironment = await parseEnvFile(appConfigPath)
  const localEnvironment = await parseEnvFile(appLocalConfigPath)

  return {
    ...defaults,
    ...environments,
    env: {
      ...config.env,
      ...defaultEnvironment,
      ...localEnvironment,
    },
  }
}

module.exports = config
