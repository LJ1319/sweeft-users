export default function UserInfo({ user }) {
  return (
    <div className="flex h-72 items-center justify-between p-6">
      <img
        width={270}
        height={200}
        src={user.imageUrl}
        alt={`${user.prefix} ${user.name} ${user.lastName}`}
      />
      <fieldset className="ml-4 w-full border-2 border-black px-2 py-1">
        <legend>Info</legend>
        <p>
          <strong>
            {user.prefix} {user.name} {user.lastName}
          </strong>
        </p>
        <p>
          <i>{user.title}</i>
        </p>
        <br />
        <p>
          <span className="underline">Email</span>: {user.email}
        </p>
        <p>
          <span className="underline">Ip Address</span>: {user.ip}
        </p>
        <p>
          <span className="underline">Job Area</span>: {user.jobArea}
        </p>
        <p>
          <span className="underline">Job Type</span>: {user.jobType}
        </p>
      </fieldset>
      <fieldset className="ml-2 h-max border-2 border-black px-2 py-1">
        <legend>Address</legend>
        <p>
          <strong>
            {user.company.name} {user.company.suffix}{" "}
          </strong>
        </p>
        <p>
          <span className="underline">City</span>: {user.address.city}
        </p>
        <p>
          <span className="underline">Country</span>: {user.address.country}
        </p>
        <p>
          <span className="underline">State</span>: {user.address.state}
        </p>
        <p>
          <span className="underline">Street Address</span>:{" "}
          {user.address.streetAddress}
        </p>
        <p>
          <span className="underline">ZIP</span>: {user.address.zipCode}
        </p>
      </fieldset>
    </div>
  );
}
