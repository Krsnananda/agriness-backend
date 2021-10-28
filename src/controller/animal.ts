// import { get } from "lodash";
// import { createPost } from "../service/animal";

// export async function createAnimalHandler(req: Request, res: Response) {
//   const userId = get(req, "user._id");
//   const body = req.body;

//   const post = await createPost({ ...body, user: userId });

//   return res.send(post);
// }