import { useLocation } from "react-router-dom";
import { usePrevLocation } from "../hooks/usePrevLocation";

export default function Friends() {
  const location = useLocation();
  const prevLocation = usePrevLocation(location);

  console.log(prevLocation);
  return (
    <div>
      Friends Component
      <h2>PREV:{prevLocation.pathname}</h2>
      <h2>LOC:{location.pathname}</h2>
    </div>
  );
}
