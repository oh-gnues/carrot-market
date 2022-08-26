import {NextApiRequest, NextApiResponse} from "next";
import client from "../../libs/client";

export default async function handler (
	req:NextApiRequest,
	res:NextApiResponse
) {
	client.user.create({
		data: {
			email: "hiasd",
			name: "seungho",
		},
	});
	res.json({
		ok: true,
	});
}