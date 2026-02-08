import { Mountain, Post, User, HikingRecord } from '../types';

export const MOCK_USER: User = {
  id: 'u1',
  nickname: 'MountainWalker',
  avatar: 'https://i.pravatar.cc/150?u=u1',
  bio: 'Loving nature, one step at a time. Chasing peaks and sunrises.',
  stats: {
    totalDistance: 125000,
    totalDuration: 360000,
    totalAltitudeGain: 8500,
    mountainsClimbed: 5,
  },
};

export const MOCK_MOUNTAINS: Mountain[] = [
  // China - East
  {
    id: 'm1',
    name: 'Huangshan (Yellow Mountain)',
    altitude: 1864,
    location: { latitude: 30.1318, longitude: 118.1736 },
    description: 'Known for its sunrises, pine trees, and granite peaks.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Huangshan_pic_4.jpg/800px-Huangshan_pic_4.jpg',
    difficulty: 4,
  },
  {
    id: 'm2',
    name: 'Huashan',
    altitude: 2154,
    location: { latitude: 34.4775, longitude: 110.0847 },
    description: 'Famous for its steep and narrow paths.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Huashan_plank_path.jpg/800px-Huashan_plank_path.jpg',
    difficulty: 5,
  },
  {
    id: 'm3',
    name: 'Tai Shan',
    altitude: 1545,
    location: { latitude: 36.2555, longitude: 117.1036 },
    description: 'One of the Five Great Mountains of China.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mount_Tai_Sunrise.jpg/800px-Mount_Tai_Sunrise.jpg',
    difficulty: 3,
  },
  // China - Southwest
  {
    id: 'm4',
    name: 'Emei Shan',
    altitude: 3099,
    location: { latitude: 29.5167, longitude: 103.3333 },
    description: 'One of the Four Sacred Buddhist Mountains of China.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Emeishan_Golden_Summit.jpg/800px-Emeishan_Golden_Summit.jpg',
    difficulty: 4,
  },
  {
    id: 'm5',
    name: 'Yulong Xueshan (Jade Dragon)',
    altitude: 5596,
    location: { latitude: 27.0989, longitude: 100.2056 },
    description: 'A massif forming part of the Yulong Snow Mountain National Scenic Area.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Jade_Dragon_Snow_Mountain.jpg/800px-Jade_Dragon_Snow_Mountain.jpg',
    difficulty: 5,
  },
  // China - North
  {
    id: 'm6',
    name: 'Wutai Shan',
    altitude: 3061,
    location: { latitude: 39.0167, longitude: 113.5833 },
    description: 'Host to over 53 sacred monasteries.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Wutai_Shan_Pusading.jpg/800px-Wutai_Shan_Pusading.jpg',
    difficulty: 3,
  },
  // International
  {
    id: 'm7',
    name: 'Mount Fuji',
    altitude: 3776,
    location: { latitude: 35.3606, longitude: 138.7274 },
    description: 'Japan\'s highest mountain, an active volcano.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/080103_huzi_city.jpg/800px-080103_huzi_city.jpg',
    difficulty: 4,
  },
  {
    id: 'm8',
    name: 'Everest (Qomolangma)',
    altitude: 8848,
    location: { latitude: 27.9881, longitude: 86.9250 },
    description: 'Earth\'s highest mountain above sea level.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/800px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg',
    difficulty: 5,
  },
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    userId: 'u1',
    userName: 'MountainWalker',
    userAvatar: 'https://i.pravatar.cc/150?u=u1',
    mountainId: 'm1',
    mountainName: 'Huangshan',
    content: 'The sunrise at Huangshan was absolutely breathtaking today! #hiking #nature',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Huangshan_pic_4.jpg/800px-Huangshan_pic_4.jpg'],
    likes: 24,
    comments: 5,
    timestamp: Date.now() - 86400000,
  },
  {
    id: 'p2',
    userId: 'u2',
    userName: 'HikerJoe',
    userAvatar: 'https://i.pravatar.cc/150?u=u2',
    content: 'Just started my journey to Tai Shan! Wish me luck. The weather looks a bit cloudy but spirits are high.',
    images: [],
    likes: 12,
    comments: 1,
    timestamp: Date.now() - 3600000,
  },
  {
    id: 'p3',
    userId: 'u3',
    userName: 'AliceClimbs',
    userAvatar: 'https://i.pravatar.cc/150?u=u3',
    mountainId: 'm4',
    mountainName: 'Emei Shan',
    content: 'Met some monkeys on the way up Emei Shan. They were cute but cheeky!',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Emeishan_Golden_Summit.jpg/800px-Emeishan_Golden_Summit.jpg'],
    likes: 45,
    comments: 12,
    timestamp: Date.now() - 7200000,
  },
  {
    id: 'p4',
    userId: 'u4',
    userName: 'SummitSeeker',
    userAvatar: 'https://i.pravatar.cc/150?u=u4',
    mountainId: 'm7',
    mountainName: 'Mount Fuji',
    content: 'Finally reached the top of Fuji-san! The view is worth every step.',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/080103_huzi_city.jpg/800px-080103_huzi_city.jpg'],
    likes: 156,
    comments: 28,
    timestamp: Date.now() - 172800000, // 2 days ago
  },
  {
    id: 'p5',
    userId: 'u5',
    userName: 'NatureLover99',
    userAvatar: 'https://i.pravatar.cc/150?u=u5',
    content: 'Looking for hiking buddies for next weekend near Beijing. Any recommendations?',
    images: [],
    likes: 8,
    comments: 15,
    timestamp: Date.now() - 43200000, // 12 hours ago
  },
];

export const MOCK_HISTORY: HikingRecord[] = [
  {
    id: 'r1',
    userId: 'u1',
    mountainId: 'm1',
    startTime: Date.now() - 1000000000,
    endTime: Date.now() - 999980000,
    duration: 20000,
    distance: 15000,
    altitudeGain: 1200,
    maxAltitude: 1864,
    path: [], // Simplified for mock
    status: 'completed',
    weather: 'Sunny'
  },
  {
    id: 'r2',
    userId: 'u1',
    mountainId: 'm3',
    startTime: Date.now() - 500000000,
    endTime: Date.now() - 499985000,
    duration: 15000,
    distance: 12000,
    altitudeGain: 900,
    maxAltitude: 1545,
    path: [], 
    status: 'completed',
    weather: 'Cloudy'
  },
];
