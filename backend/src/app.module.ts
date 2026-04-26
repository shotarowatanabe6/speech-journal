import { Module } from '@nestjs/common';
import { AppController, HealthCheckController } from './app.controller';
import { AppService, HealthCheckService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, HealthCheckController],
  providers: [AppService, HealthCheckService],
})
export class AppModule {}
