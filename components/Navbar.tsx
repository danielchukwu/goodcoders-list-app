import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-8 lg:px-20 py-5 border-b border-gray-200 bg-white">
      <Link href={'/'}>
        <div className="logo text-gray-900">
          <h1 className="text-xl font-bold">GoodCoders List</h1>
        </div>
      </Link>

      <ul className="flex gap-7">
        <Link href={'/'}><li>Home</li></Link>
        <Link href={'/about'}><li>About</li></Link>
        <Link href={'/goodcoders'}><li>Coders</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;