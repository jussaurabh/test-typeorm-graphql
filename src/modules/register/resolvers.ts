import * as bcrypt from 'bcryptjs';
import { User } from '../../entity/User';

export const resolvers = {
	Query: {
		blah: () => 'blah'
	},
	Mutation: {
		register: async (_, { email, password }) => {
			const userAlreadyExists = await User.findOne({
				where: { email },
				select: [ 'id' ]
			});

			if (userAlreadyExists) {
				return [
					{
						path: 'email',
						message: 'User already exists'
					}
				];
			}

			const hashedPassword = await bcrypt.hash(password, 10);
			await User.insert({
				email,
				password: hashedPassword
			});
			return null;
		}
	}
};
