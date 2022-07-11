import type { NextApiRequest, NextApiResponse } from "next";
import faker from "@faker-js/faker";

export type Post = {
  commentsCount: number;
  id: string;
  imageUrl: string;
  likesCount: number;
};

type Data = {
  posts: Post[];
};

function generatePosts(): Post[] {
  const posts: Post[] = [];

  for (let i = 0; i < 100; i += 1) {
    posts.push({
      commentsCount: faker.random.number(),
      id: faker.random.uuid(),
      imageUrl: faker.image.image(),
      likesCount: faker.random.number(),
    });
  }

  return posts;
}

const posts: Post[] = generatePosts();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ posts });
}
