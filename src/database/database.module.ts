import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';

export const DatabaseSource = 'DATA_SOURCE';
const databaseProviders = [
  {
    provide: DatabaseSource,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'alexeymaltsev',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
