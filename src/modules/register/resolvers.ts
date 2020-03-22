import * as bcrypt from 'bcryptjs';
import { User } from '../../entity/User';

export const resolvers = {
	Query: {
		blah: () => 'blah'
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
