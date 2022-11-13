import { ApolloServer, gql } from "apollo-server";
import schema from "./schema";

const server = new ApolloServer({
	schema,
	context: ({ req }) => {
		return {
			req,
		};
	},
});

server
	.listen()
	.then(() => console.log("Server is running on http://localhost:4000/"));
