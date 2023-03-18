import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
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
    <div className="mx-auto w-max 2xl:border-[1px]">
      {user && <UserInfo user={user} />}
      {user && (
        <Breadcrumbs
          prefix={user.prefix}
          name={user.name}
          lastName={user.lastName}
        />
      )}
      <Friends userId={userId} />
    </div>
  );
}
