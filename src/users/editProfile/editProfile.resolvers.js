import bcrypt from "bcrypt";

export default {
	Mutation: {
		editProfile: async (
			_,
			{ firstName, lastName, username, email, password }
		) => {
			let uglypasswords = null;
			if (newpassword) {
				uglypasswords = await bcrypt.hash(newpassword, 10);
			}
			return client.user.update({
				where: { id: 1 },
				data: {
					firstName,
					lastName,
					username,
					email,
					...(uglypasswords && { password: uglypasswords }),
				},
			});
		},
	},
};
