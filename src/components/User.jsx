export default function User({ id, name, lastName, prefix, imageUrl }) {
  return (
    <div>
      {id > 10 ? (
        <img src={`${imageUrl}?v2`} alt="" />
      ) : (
        <img src={`${imageUrl}?v1`} alt="" />
      )}
    </div>
  );
}
