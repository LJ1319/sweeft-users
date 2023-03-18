import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs({ prefix, name, lastName }) {
  const currentLocation = useLocation();

  let currentLink = "";

  const crumbs = currentLocation.pathname
    .split("/user/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink} className="ml-6 underline">
            {prefix} {name} {lastName}
          </Link>{" "}
          &gt;
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}
