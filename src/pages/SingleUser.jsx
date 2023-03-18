import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Friends from "../components/Friends";
import UserInfo from "../components/UserInfo";

const BASE_URL =
  "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com";

export default function SingleUser() {
  const [user, setUser] = useState(null);

  const { id: userId } = useParams();

  useEffect(() => {
    let ignore = false;
    setUser(null);
    async function fetchUser() {
      const response = await axios.get(`${BASE_URL}/user/${userId}}`);
      const userInfo = response.data;
      if (!ignore) {
        setUser(userInfo);
      }
    }
    fetchUser();
    return () => {
      ignore = true;
    };
  }, [userId]);

  return (
    <div className="mx-auto w-8/12 border-[1px]">
      {user && <UserInfo user={user} />}
      <Friends userId={userId} />
    </div>
  );
}
