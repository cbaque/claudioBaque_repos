import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type : 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      // synchronize: true,
      autoLoadEntities:true,
      ssl: true,
      extra: {
        options: process.env.DB_CLUSTER,
        ssl: {
          rejectUnauthorized: false,
        },
      },

    }),
    OrganizationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

