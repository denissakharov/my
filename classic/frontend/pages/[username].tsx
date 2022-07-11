import { NextPage } from "next";
import { useRouter } from "next/router";

const ProfilePage: NextPage = () => {
  const router = useRouter();

  return <h1>{router.query.username}</h1>;
};

export default ProfilePage;
