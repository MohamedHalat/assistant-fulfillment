import { connection } from "./connection";
export class Database {

  static query(sql: string, values?: any): Promise<any[]> {
    let result: Promise<any[]> = new Promise((resolve, reject) =>{
      connection.query(sql, values,(err: any, rows: any[]) => {
        console.log(`sql ${sql} \nvalues: ${values} \nrows: ${JSON.stringify(rows)}`);
        if (err) {
          console.warn(err);
          return reject(err);
        }
        return resolve(rows);
      });
    });

    return result;
  }

  static killConnection() {
    return connection.end();
  }
}
