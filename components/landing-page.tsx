'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/providers/auth-provider';
import { ArrowRight, Building2, GraduationCap, LayoutGrid, Users } from 'lucide-react';
import Link from 'next/link';

export function LandingPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Business</span>
              <span className="block text-primary">with LanetBase</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your all-in-one platform for business growth, collaboration, and innovation.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href={user ? '/dashboard' : '/auth/login'}>
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive solutions for your business needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Hub */}
            <div className="bg-card rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-primary text-center">Hub</h3>
              <p className="mt-2 text-muted-foreground text-center">
                Collaborative workspace for teams
              </p>
            </div>

            {/* Marketplace */}
            <div className="bg-card rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground mx-auto">
                <LayoutGrid className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-primary text-center">Marketplace</h3>
              <p className="mt-2 text-muted-foreground text-center">
                Multi-vendor e-commerce platform
              </p>
            </div>

            {/* Virtual Internship */}
            <div className="bg-card rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground mx-auto">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-primary text-center">Virtual Internship</h3>
              <p className="mt-2 text-muted-foreground text-center">
                Remote learning environment
              </p>
            </div>

            {/* Smart School */}
            <div className="bg-card rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground mx-auto">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-primary text-center">Smart School</h3>
              <p className="mt-2 text-muted-foreground text-center">
                Gamified education platform
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}