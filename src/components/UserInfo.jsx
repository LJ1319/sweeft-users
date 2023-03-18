export default function UserInfo({ user }) {
  return (
    <div className="mb-96 flex h-72 flex-col items-center justify-between p-6 px-4 2xl:mb-0 2xl:flex-row">
      <img
        width={270}
        height={200}
        src={`${user.imageUrl}?v${user.id}`}
        alt={`${user.prefix} ${user.name} ${user.lastName}`}
      />
      <fieldset className="w-full border-2 border-black px-2 py-1 2xl:ml-4">
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
      <fieldset className="w-full border-2 border-black px-2 py-1 2xl:ml-2 2xl:h-max 2xl:w-max">
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
