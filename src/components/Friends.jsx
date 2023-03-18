import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePrevLocation } from "../hooks/usePrevLocation";
import Loading from "./Loading";
import UserList from "./UserList";

const BASE_URL =
  "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com";
const PAGE_NUMBER = 1;
const SIZE = 20;

export default function Friends({ userId }) {
  const location = useLocation();
  const prevLocation = usePrevLocation(location);

  const [friends, setFriends] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [size, setSize] = useState(SIZE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    setFriends([]);
    async function fetchFriends() {
      const response = await axios.get(
        `${BASE_URL}/user/${userId}/friends/${page}/${size}`
      );
      const newFriends = response.data.list;
      if (!ignore) {
        setFriends(newFriends);
        setLoading(false);
      }
    }

    fetchFriends();
    return () => {
      ignore = true;
    };
  }, [userId]);

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
  }, [page, size]);

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
    <div>
      Friends Component
      <h2>PREV:{prevLocation.pathname}</h2>
      <h2>LOC:{location.pathname}</h2>
      <div>
        <h2 className="m-6 text-2xl font-bold">Friends: </h2>
        <UserList users={friends} />
      </div>
      {loading && <Loading />}
    </div>
  );
}
