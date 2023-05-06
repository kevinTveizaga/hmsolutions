import { DataSource, DataSourceOptions } from 'typeorm';

export const postgresDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'rick',
  password: 'rick_HUNTER1980',
  database: 'hmsolutions_db',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],

  synchronize: false,
};

const dataSource = new DataSource(postgresDataSourceOptions);

export default dataSource;
