import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import UserInfo from "../components/UserInfo";
import UserList from "../components/UserList";

const BASE_URL =
  "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com";
const PAGE_NUMBER = 1;
const SIZE = 20;

export default function SingleUser() {
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [size, setSize] = useState(SIZE);
  const [loading, setLoading] = useState(true);

  const { id: userId } = useParams();

  useEffect(() => {
    if (!loading) return;
    let timeoutId = setTimeout(async () => {
      const response = await axios.get(`${BASE_URL}/user/${userId}}`);
      const userInfo = response.data;

      setUser(userInfo);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [loading, userId]);

  useEffect(() => {
    if (!loading) return;

    let timeoutId = setTimeout(async () => {
      const response = await axios.get(
        `${BASE_URL}/user/${userId}/friends/${page}/${size}`
      );
      const newFriends = response.data.list;

      setFriends((oldFriends) => {
        return [...oldFriends, ...newFriends];
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [loading, userId, page, size]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  async function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
    }
  }

  return (
    <div className="mx-auto w-8/12 border-[1px]">
      {user && <UserInfo user={user} />}
      <div>
        <h2 className="m-6 text-2xl font-bold">Friends: </h2>
        <UserList users={friends} />
      </div>
      {loading && <Loading />}
    </div>
  );
}
