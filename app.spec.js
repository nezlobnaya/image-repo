import supertest from "supertest";
import app from "./app";

test('app.js', async () => {
    const response = await supertest(app).get('/');
    expect(response.status).toBe(200);
});

