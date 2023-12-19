import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import resultData from './data/result.data';

const gql = '/graphql';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return correct result', () => {
    return request(app.getHttpServer())
      .post(gql)
      .send({ query: '{getTree {id name }}' })
      .expect(200)
      .expect({
        data: {
          getTree: [
            {
              id: 'uuid-1',
              name: 'Webprovise Corp',
            },
          ],
        },
      });
  });

  it('should return full result', () => {
    return request(app.getHttpServer())
      .post(gql)
      .send({ query: '{ getTree { id cost parentId createdAt name children { id cost parentId createdAt name children { id cost name parentId createdAt children { id cost name parentId createdAt children { id cost } } } } } }' })
      .expect(200)
      .expect({
        data: {
          getTree: resultData,
        },
      });
  });
});
