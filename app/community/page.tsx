'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NewsFeed } from '@/components/community/news-feed';
import { GroupsList } from '@/components/community/groups-list';
import { EventsList } from '@/components/community/events-list';
import { CommunitySearch } from '@/components/community/search';
import { Analytics } from '@/components/community/analytics';
import { NotificationCenter } from '@/components/community/notification-center';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('feed');

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Community</h1>
        <NotificationCenter />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full">
              <TabsTrigger value="feed">News Feed</TabsTrigger>
              <TabsTrigger value="groups">Groups</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="feed">
              <NewsFeed />
            </TabsContent>

            <TabsContent value="groups">
              <GroupsList />
            </TabsContent>

            <TabsContent value="events">
              <EventsList />
            </TabsContent>

            <TabsContent value="analytics">
              <Analytics />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <CommunitySearch />
        </div>
      </div>
    </div>
  );
}