export interface Post {
  id: string;
  userId: string;
  userEmail: string;
  content: string;
  likes: number;
  comments: Comment[];
  timestamp: number;
  tags: string[];
}

export interface Comment {
  id: string;
  userId: string;
  userEmail: string;
  content: string;
  timestamp: number;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  createdBy: string;
  timestamp: number;
  category: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  attendees: string[];
  category: string;
}

export interface UserPreferences {
  interests: string[];
  followedTags: string[];
  joinedGroups: string[];
}