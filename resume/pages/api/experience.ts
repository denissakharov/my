import { NextApiRequest, NextApiResponse } from "next";
import { experience } from "../../data/experience";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(experience);
}
