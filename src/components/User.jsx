import { useState } from "react";

export default function User({ id, name, lastName, prefix, imageUrl }) {
  let random = Math.floor(Math.random() * 10 + 1);
  const [image, setImage] = useState(() => `${imageUrl}?v${random}`);

  return (
    <div>
      <img src={image} alt={`${prefix} ${name} ${lastName}`} />
    </div>
  );
}
