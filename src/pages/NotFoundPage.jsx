import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <p>
        404 Not Found! Please follow this <Link to="/">link</Link>
      </p>
    </>
  );
}
