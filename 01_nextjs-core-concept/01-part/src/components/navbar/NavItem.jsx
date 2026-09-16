import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavItem({ href, children }) {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={` ${pathName === href ? 'font-bold text-blue-400 bg-white px-4 py-2' : 'text-white hover:text-gray-400'}`}
      >
        {children}
      </Link>
    </li>
  );
}
