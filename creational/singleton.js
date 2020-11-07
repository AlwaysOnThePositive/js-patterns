class Database {
  constructor(data) {
    if (Database.exist) return Database.instanse;

    Database.instanse = this;
    Database.exist = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new Database('MongoDB');
console.log('mongo', mongo);

/* wrong using */
const mySql = new Database('MySQL');
console.log('sql', mySql);
