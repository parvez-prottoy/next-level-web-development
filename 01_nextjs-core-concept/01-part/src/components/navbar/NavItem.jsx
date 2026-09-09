import Link from 'next/link';

export default function NavItem({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:text-white">
        {children}
      </Link>
    </li>
  );
}
