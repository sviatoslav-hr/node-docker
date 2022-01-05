import { Injectable } from '@nestjs/common';
import os from 'os';

@Injectable()
export class ConfigService {
  get(key: string): string {
    return process.env[key] as string;
  }

  get port(): number | string {
    return this.get('PORT') || 3003;
  }

  get env(): string {
    return this.get('ENV') || 'development';
  }

  get prod(): boolean {
    return this.env === 'production';
  }

  get host(): string {
    return os.hostname();
  }

  get dbType(): string {
    return this.get('DB_TYPE') || 'mysql';
  }
}
