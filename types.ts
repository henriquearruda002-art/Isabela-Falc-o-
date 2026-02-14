
export interface CreatorStats {
  posts: number;
  videos: number;
  photos: number;
  likes: string;
}

export interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  label?: string;
  labelColor?: string;
  duration: string;
}

export interface ContentItem {
  id: string;
  type: 'video' | 'photo';
  thumbnail: string;
  likes: string;
  comments: string;
  isLocked: boolean;
}
