import Sidebar from '@/components/dashboard/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="grow">
        <div className="container mx-auto max-w-6xl px-4 py-8">{children}</div>
      </main>
    </div>
  );
}
