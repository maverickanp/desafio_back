import 'reflect-metadata'
import { createConnection, Connection } from 'typeorm'
import {
  UserEntity
} from './entities'
// import { createUsers } from './crud/'

const app = async (): Promise<void> => {
  const connection: Connection = await createConnection({
    type: 'sqlite',
    database: './db/wecare_typeorm.db',
    entities: [
      UserEntity
    ]
  })

  await connection.synchronize(false).catch(console.error)
  // await createUsers(connection)
}

app().catch(err => console.log(err))
  .then(() => console.log('this will succeed'))
  .catch(() => 'obligatory catch')
