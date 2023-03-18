import { Link } from "react-router-dom";

export default function User({ id, name, lastName, prefix, imageUrl, title }) {
  return (
    <div className="2xl:h-72">
      <div className="mx-auto w-2/3 border-[1px] 2xl:w-72">
        <Link to={`/user/${id}`}>
          <img
            src={`${imageUrl}?v${id}`}
            alt={`${prefix} ${name} ${lastName}`}
          />
          <div>
            <p className="px-2">
              <strong>
                {prefix} {name} {lastName}
              </strong>
            </p>
            <p className="px-2">{title}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
