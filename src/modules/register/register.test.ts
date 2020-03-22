import { request } from 'graphql-request';
import { startServer } from '../../startServer';

let getHost = () => '';

beforeAll(async () => {
	const app = await startServer();
	const { port } = app.address();
	getHost = () => `http://localhost:${port}`;
});

const email = 'bobby@mail.com';
const password = 'bob';

const mutation = `
    mutation {
        register(email: "${email}", password: "${password}")
    }
`;

test('Register User', async () => {
	const response = await request(getHost(), mutation);
	expect(response).toEqual({ register: true });
});
