import { request } from 'graphql-request';
import { createConnection } from 'typeorm';

const email = 'bob@mail.com';
const password = 'bob';

const mutation = `
    mutation {
        register(email: "${email}", password: "${password}")
    }
`;

test('Register User', async () => {
	const response = await request('http://localhost:4000', mutation);
	expect(response).toEqual({ register: true });
});
