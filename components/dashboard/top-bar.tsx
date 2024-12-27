'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/providers/auth-provider';
import { signOutUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export function TopBar() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOutUser();
    router.push('/');
  };

  return (
    <header className="h-16 border-b bg-card">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="font-semibold text-lg">LanetBase</div>
        <div className="flex items-center space-x-4">
          <span className="text-sm">{user?.email}</span>
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
}