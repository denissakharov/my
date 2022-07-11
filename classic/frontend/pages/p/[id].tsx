import { NextPage } from "next";
import { useRouter } from "next/router";

const PostPage: NextPage = () => {
  const router = useRouter();

  return <h1>{router.query.id}</h1>;
};

export default PostPage;
