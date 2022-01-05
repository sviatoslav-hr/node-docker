import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { TypeOrmConfigService } from './type-orm.service';

@Module({
  providers: [ConfigService, TypeOrmConfigService],
  exports: [ConfigService, TypeOrmConfigService],
})
export class ConfigModule {}
