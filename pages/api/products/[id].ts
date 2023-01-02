import {NextApiRequest, NextApiResponse} from "next";
import withHandler, {ResponseType} from "@libs/server/withHandler";
import {withApiSession} from "@libs/server/withSession";
import client from "@libs/server/client";

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>
) {
	const {id} = req.query;
	const product = await client.product.findUnique({
		where: {
			id: Number(id),
		},
		include: {
			user: {
				select: {
					id: true,
					name: true,
					avatar: true,
				}
			},
		}
	});
	console.log(product);
	res.json({ok: true, product});
}

export default withApiSession(withHandler({
	methods: ["GET"],
	handler
}));