import pg from 'pg'
import { initQuery } from './dbHelper'

console.log('loading db')

// connect to psql database and instantiate client
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/nodelearn'
const client = new pg.Client(connectionString)

// make a wrapper over connection to make future db calls
const query = initQuery(client)

client.connect()

export { query }
