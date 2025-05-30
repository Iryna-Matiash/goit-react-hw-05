// import { Link } from "react-router-dom";

// export default function NotFoundPage() {
//   return (
//     <>
//       <p>
//         404 Not Found! Please follow this <Link to="/">link</Link>
//       </p>
//     </>
//   );
// }

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
