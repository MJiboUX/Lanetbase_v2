import { UserRole } from '@/lib/auth';
import {
  Building2,
  GraduationCap,
  Home,
  LayoutGrid,
  Settings,
  Users,
} from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
  userRole: UserRole | null;
}

const menuItems = {
  super_admin: [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Users, label: 'User Management', href: '/dashboard/users' },
    { icon: Settings, label: 'System Settings', href: '/dashboard/settings' },
  ],
  admin: [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Users, label: 'Users', href: '/dashboard/users' },
  ],
  user: [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Building2, label: 'Hub', href: '/dashboard/hub' },
    { icon: LayoutGrid, label: 'Marketplace', href: '/dashboard/marketplace' },
    { icon: GraduationCap, label: 'Internship', href: '/dashboard/internship' },
  ],
};

export function Sidebar({ userRole }: SidebarProps) {
  const items = userRole ? menuItems[userRole] : menuItems.user;

  return (
    <div className="w-64 bg-card border-r">
      <div className="p-4">
        <nav className="space-y-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-2 px-4 py-2 text-sm rounded-lg hover:bg-accent"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}