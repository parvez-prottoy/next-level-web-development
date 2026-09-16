import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="flex h-screen flex-col justify-between border-e border-gray-100 bg-white md:w-62">
      <div className="p-4">
        <Link
          href="/dashboard"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
        >
          Dashboard
        </Link>

        <ul className="mt-4 space-y-1">
          <Link
            href="/dashboard/add-story"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Add Story
          </Link>
          <Link
            href="/dashboard/profile"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            My Profile
          </Link>
          <Link
            href="/dashboard/settings"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Settings
          </Link>
        </ul>
      </div>
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 hover:transition-colors"
        >
          {/* <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=1160"
            className="size-10 rounded-full object-cover"
          /> */}

          <p className="text-xs text-gray-900">
            <strong className="block font-medium">Eric Frusciante</strong>

            <span> eric@frusciante.com </span>
          </p>
        </a>
      </div>
    </div>
  );
}
