import { useRouter } from "next/router";

const Profile = () => {
  const { query } = useRouter();
  const { id } = query;

  return <h1>Profile {id}</h1>;
};

export default Profile;
