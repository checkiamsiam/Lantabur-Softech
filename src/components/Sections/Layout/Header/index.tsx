import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <Link href="/" className="text-2xl hover:text-primary hover:underline no-underline text-grey-darkest hover:text-blue-dark">
            Home
          </Link>
        </div>
        <div>
          <Link href="/login" className="text-lg hover:text-primary hover:underline no-underline text-grey-darkest hover:text-blue-dark ml-2">
            Login
          </Link>
          <Link href="/privet" className="text-lg hover:text-primary hover:underline no-underline text-grey-darkest hover:text-blue-dark ml-2">
            Privet
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
