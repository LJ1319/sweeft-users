import { useState } from "react";
import { Link } from "react-router-dom";

export default function User({ id, name, lastName, prefix, imageUrl, title }) {
  let random = Math.floor(Math.random() * 10 + 1);
  const [image, setImage] = useState(() => `${imageUrl}?v${random}`);

  return (
    <div className="h-72">
      <div className="mx-auto w-72 border-[1px]">
        <Link to={`/user/${id}`}>
          <img src={image} alt={`${prefix} ${name} ${lastName}`} />
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
