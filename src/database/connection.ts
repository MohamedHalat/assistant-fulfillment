import mysql from 'mysql'

let config: any = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "temppass",
  database: "ishmodelorganism",
}

const prodConfig: any = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "temppass",
  database: "ishmodelorganism",
}

if (process.env.NODE_ENV === 'production') {
  config = prodConfig;
}

export const connection = mysql.createConnection(config);