import { Controller, Get } from '@nestjs/common';
import { AppService, HealthCheckService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// dtoは別ファイルに分けるべき？
export class HealthCheckDto {
  status: 'ok';
  timestamp: string; // Unixtime
}

@Controller('health')
export class HealthCheckController {
  constructor(private readonly healthService: HealthCheckService) {}

  @Get()
  getHealth(): HealthCheckDto {
    return this.healthService.getHealth();
  }
}
