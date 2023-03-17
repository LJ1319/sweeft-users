import { useState } from "react";

export default function User({ id, name, lastName, prefix, imageUrl, title }) {
  let random = Math.floor(Math.random() * 10 + 1);
  const [image, setImage] = useState(() => `${imageUrl}?v${random}`);

  return (
    <div className="h-72">
      <div className="mx-auto w-72 border-[1px]">
        <img src={image} alt={`${prefix} ${name} ${lastName}`} />
        <div>
          <p className="px-2 pt-1">
            <strong>
              {prefix} {name} {lastName}
            </strong>
          </p>
          <p className="px-2 pt-1">{title}</p>
        </div>
      </div>
    </div>
  );
}
