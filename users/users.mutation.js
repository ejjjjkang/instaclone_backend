import client from "../client";

export default {
	Mutation: {
		createAccount: async (
			_,
			{ firstName, lastName, userName, email, password },
		) => {
			//check if username or email are already exist
			const existingUser = await client.user.findFirst({
				where: {
					OR: [
						{
							username: userName,
						},
						{
							email,
						},
					],
				},
			});
		},
	},
};
