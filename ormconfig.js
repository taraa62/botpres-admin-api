require('dotenv').config();

module.exports = {
  type: 'postgres',
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  dropSchema: false,
  logging: true,
  entities: ['dist/**/*.entity.js'],
};
