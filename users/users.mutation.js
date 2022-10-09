import client from "../client";
import bcrypt from "bcrypt";

export default {
	Mutation: {
		createAccount: async (
			_,
			{ firstName, lastName, userName, email, password }
		) => {
			try {
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
				if (existingUser) {
					throw new Error("This username / password is already taken");
				}
				const uglyPassword = await bcrypt.hash(password, 10);
				return client.user.create({
					data: {
						userName,
						email,
						firstName,
						lastName,
						password: uglyPassword,
					},
				});
			} catch (e) {
				return e;
			}
		},
		login: async (_, { username, password }) => {
			const user = await client.user.findFirst({ where: { username } });
			if (!user) {
				return {
					ok: false,
					error: "User not found",
				};
			}
		},
	},
};
