import { request } from 'graphql-request';
import { startServer } from '../../startServer';
import { User } from '../../entity/User';

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
        register(email: "${email}", password: "${password}") {
			path
			message
		}
    } 	
`;

test('Register User', async () => {
	const response = await request(getHost(), mutation);
	expect(response).toEqual({ register: null });

	const users = await User.find({ where: { email } });
	expect(users).toHaveLength(1);

	const user = users[0];
	expect(user.email).toEqual(email);
	expect(user.password).not.toEqual(password);

	const resp2: any = await request(getHost(), mutation);
	expect(resp2.register).toHaveLength(1);
	expect(resp2.register[0].path).toEqual('email');
});
