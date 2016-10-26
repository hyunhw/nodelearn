import chalk from 'chalk'

export const initQuery = (client) => {
    return (sql, values) => {
        return new Promise((resolve, reject) => {
            client.query(sql, values, (err, result) => {
                if (err) {
                    console.log(`
                        ${chalk.red.bold('SQL ERROR')}: ${err}
                        ...
                        tried query: ${sql} ${values}
                    `)

                    reject(err)
                }

                return resolve(result)
            })
        })
    }
}
