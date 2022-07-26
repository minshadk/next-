import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>List</h1>
        {/* <Image src="/logo.png" width={128} height/> */}
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/lists/">
        <a>Lists</a>
      </Link>
    </nav>
  );
};

export default Navbar;
