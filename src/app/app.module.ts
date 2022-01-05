import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, TypeOrmConfigService } from '../config';
import { ConfigService } from '../config/config.service';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [
    ConfigModule,
    FilesModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService, TypeOrmConfigService],
      useExisting: TypeOrmConfigService,
    }),
  ],
  controllers: [],
})
export class AppModule {}
