import User from "./User";

export default function UserList({ users }) {
  return (
    <div className="mx-4 grid grid-cols-1 gap-1 xl:grid-cols-2  2xl:grid-cols-4">
      {users.map((user, index) => {
        return <User key={index} {...user} />;
      })}
    </div>
  );
}
