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

@Controller('health')
export class HealthCheckController {
  constructor(private readonly healthService: HealthCheckService) {}

  @Get()
  getHealth(): string {
    return this.healthService.getHealth();
  }
}
