import chalk from 'chalk'

import { query } from './index'


const setup = () => {
  const promises = [
    query("DROP SCHEMA public CASCADE; CREATE SCHEMA public; GRANT ALL ON SCHEMA public TO postgres; GRANT ALL ON SCHEMA public TO public; COMMENT ON SCHEMA public IS 'standard public schema'"),
  ]

  return Promise.all(promises)
}

const seed = () => {
    let createUsers = `CREATE TABLE users(id SERIAL PRIMARY KEY not null, created_at bigint, updated_at bigint, name TEXT)`

    return query(createUsers)
        .then(() => console.log(chalk.blue.bold('users seeded')))
}

setup()
seed()
