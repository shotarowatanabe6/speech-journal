import { Injectable } from '@nestjs/common';
import { HealthCheckDto } from 'src/app.controller';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class HealthCheckService {
  getHealth(): HealthCheckDto {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
