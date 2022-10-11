import { gql } from "apollo-server";

export default gql`
	type User {
		id: String!
		firstName: String!
		lastName: String
		username: String!
		email: String!
		createAt: String!
		updateAt: String!
	}
	type Mutation {
		createAccount(
			firstName: String!
			lastName: String
			username: String!
			email: String!
			password: String!
		): User

		login(username: String!, password: String!): LoginResult!
	}
	type Query {
		seeProfile(username: String): User
	}
`;