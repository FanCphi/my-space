export interface User {
  id: string;
  nickname: string;
  avatar: string;
  bio: string;
  stats: {
    totalDistance: number; // meters
    totalDuration: number; // seconds
    totalAltitudeGain: number; // meters
    mountainsClimbed: number;
  };
}

export interface LocationPoint {
  latitude: number;
  longitude: number;
  altitude: number;
  timestamp: number;
}

export interface Mountain {
  id: string;
  name: string;
  altitude: number;
  location: {
    latitude: number;
    longitude: number;
  };
  description: string;
  imageUrl: string;
  difficulty: number; // 1-5
}

export interface HikingRecord {
  id: string;
  userId: string;
  mountainId?: string; // If matched
  startTime: number;
  endTime: number;
  duration: number; // seconds
  distance: number; // meters
  altitudeGain: number; // meters
  maxAltitude: number;
  path: LocationPoint[];
  status: 'completed' | 'ongoing';
  weather?: string;
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  mountainId?: string;
  mountainName?: string;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  timestamp: number;
}
