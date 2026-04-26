import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('HealthCheckController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /health returns 200 and "ok"', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect('{"status": "ok", "timestamp": "12345"}'); // FIXME: timestampはモックをDIしたいが、どのように書けば良い？
  });

  afterEach(async () => {
    await app.close();
  });
});
