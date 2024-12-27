'use client';

import { useAuth } from '@/providers/auth-provider';
import { Sidebar } from './sidebar';
import { TopBar } from './top-bar';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userRole } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar userRole={userRole} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}