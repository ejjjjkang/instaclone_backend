import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
	Mutation: {
		editProfile: async (
			_,
			{ firstName, lastName, username, email, password: newpassword, token }
		) => {
			const { id } = await jwt.verify(token, process.env.SECRET_KEY);
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
