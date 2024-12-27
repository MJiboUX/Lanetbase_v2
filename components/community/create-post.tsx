'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/providers/auth-provider';
import { Post } from '@/lib/community/types';

interface CreatePostProps {
  onPost: (post: Post) => void;
}

export function CreatePost({ onPost }: CreatePostProps) {
  const { user } = useAuth();
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!content.trim() || !user) return;

    const newPost: Post = {
      id: Date.now().toString(),
      userId: user.uid,
      userEmail: user.email || '',
      content: content.trim(),
      likes: 0,
      comments: [],
      timestamp: Date.now(),
      tags: [],
    };

    onPost(newPost);
    setContent('');
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <Textarea
          placeholder="Share something with the community..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-4"
        />
        <div className="flex justify-end">
          <Button onClick={handleSubmit}>Post</Button>
        </div>
      </CardContent>
    </Card>
  );
}