import * as bcrypt from 'bcryptjs';
import { User } from './entity/User';

export const resolvers = {
	Query: {
		hello: (_, { name }) => `bye ${name || 'World'}`
	},
	Mutation: {
		register: async (_, { email, password }) => {
			const hashedPassword = await bcrypt.hash(password, 10);
			await User.insert({
				email,
				password: hashedPassword
			});
			return true;
		}
	}
};
