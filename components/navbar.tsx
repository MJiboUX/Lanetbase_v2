'use client';

import { useAuth } from '@/providers/auth-provider';
import { Button } from '@/components/ui/button';
import { CircuitBoard } from 'lucide-react';
import Link from 'next/link';
import { UserNav } from './user-nav';

export function Navbar() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/90">
          <CircuitBoard className="h-6 w-6" />
          <span className="font-bold">LanetBase</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/community" className="text-sm font-medium transition-colors hover:text-primary">
            Our Community
          </Link>
          <Link href="/marketplace" className="text-sm font-medium transition-colors hover:text-primary">
            Marketplace
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <UserNav user={user} />
          ) : (
            <div className="space-x-2">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm">Register</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}