import { gql } from "apollo-server";

export default gql`
	type User {
		id: String!
		firstName: String!
		lastName: String
		userName: String!
		email: String!
		createAt: String!
		updateAt: String!
	}
	type Mutation {
		createAccount(
			firstName: String!
			lastName: String
			userName: String!
			email: String!
			password: String!
		): User
	}
	type Query {
		seeProfile(username: String): User
	}
`;
