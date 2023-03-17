import User from "./User";

export default function UserList({ users }) {
  return (
    <div className="grid grid-cols-4 px-4">
      {users.map((user, index) => {
        return <User key={index} {...user} />;
      })}
    </div>
  );
}
