import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationModule } from './organization/organization.module';
import { TribeModule } from './tribe/tribe.module';
import { RepositoryModule } from './repository/repository.module';
import { MetricsModule } from './metrics/metrics.module';
import { RepositoryStatusModule } from './repository-status/repository-status.module';

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
    OrganizationModule,
    TribeModule,
    RepositoryModule,
    MetricsModule,
    RepositoryStatusModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}

