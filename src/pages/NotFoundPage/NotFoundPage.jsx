
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h2>404 Not Found!</h2>
      <Link to="/">Return to home page</Link>
    </div>
  );
}

export default NotFoundPage;
