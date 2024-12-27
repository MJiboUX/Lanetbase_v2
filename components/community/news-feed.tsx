'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { CreatePost } from './create-post';
import { PostCard } from './post-card';
import { Post } from '@/lib/community/types';
import { useAuth } from '@/providers/auth-provider';

export function NewsFeed() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  const handleNewPost = (post: Post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="space-y-6">
      <CreatePost onPost={handleNewPost} />
      
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}