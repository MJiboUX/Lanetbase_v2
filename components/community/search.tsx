'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';

export function CommunitySearch() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Search</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input placeholder="Search community..." />
          <Button size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-4">
          <h3 className="font-medium mb-2">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">#technology</Button>
            <Button variant="outline" size="sm">#business</Button>
            <Button variant="outline" size="sm">#design</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}