export const resolvers = {
	Query: {
		hello: (_, { name }) => `bye ${name || 'World'}`
	}
};
