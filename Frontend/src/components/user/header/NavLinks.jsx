import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
      <Link to={"/"} className="text-black dark:text-gray-200 hover:text-sky-700 dark:hover:text-sky-400 ">
        Home
      </Link>
      <Link to={"/cars"} className="text-black dark:text-gray-200 hover:text-sky-700 dark:hover:text-sky-400">
        Cars
      </Link>
      <Link to={"/booking"} className="text-black dark:text-gray-200 hover:text-sky-700 dark:hover:text-sky-400">
        Booking
      </Link>
    </>
  );
}
