import { QueryProvider } from "@/lib/query-provider";
import { Sidebar } from "@/components/layout/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 bg-slate-50">{children}</main>
      </div>
    </QueryProvider>
  );
}