import request from 'supertest';
import axios from "axios";
import { app } from '../src/app';

jest.mock('axios');

describe('Test Endpoint /search.', () => {
    it('Endpoint debe retornar código 200.', async (done) => {
        const result = await request(app).get('/search').send();
        expect(result.status).toBe(200);
        done();
    });
});
