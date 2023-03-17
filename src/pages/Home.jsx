import { useEffect, useState } from "react";
import axios from "axios";

import UserList from "../components/UserList";
import Loading from "../components/Loading";

const BASE_URL =
  "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com";
const PAGE_NUMBER = 1;
const SIZE = 20;

export default function Home() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [size, setSize] = useState(SIZE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) return;

    let timeoutId = setTimeout(async () => {
      const response = await axios.get(`${BASE_URL}/user/${page}/${size}`);
      const newUsers = response.data.list;

      setUsers((prevUsers) => {
        return [...prevUsers, ...newUsers];
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [loading, page, size]);

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
    <div className="my-2.5">
      <UserList users={users} />
      {loading && <Loading />}
    </div>
  );
}
