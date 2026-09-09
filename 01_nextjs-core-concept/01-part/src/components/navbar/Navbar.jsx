import Link from 'next/link';
import NavItem from './NavItem';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto max-w-6xl px-4 flex items-center justify-between">
        <Link href="/" className="text-white text-lg font-semibold">
          Dev Story
        </Link>
        <ul className="flex space-x-6 mt-2">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/tutorials">Tutorials</NavItem>
          <NavItem href="/stories">Stories</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/about/team">Team</NavItem>
          <NavItem href="/about/contact">Contact</NavItem>
          <NavItem href="/login">Login</NavItem>
          <NavItem href="/register">Register</NavItem>
        </ul>
      </div>
    </nav>
  );
}
