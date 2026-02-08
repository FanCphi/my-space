import { create } from 'zustand';
import { HikingRecord, LocationPoint, Mountain, User } from '../types';
import { MOCK_USER, MOCK_HISTORY } from '../services/mockData';

interface AppState {
  user: User;
  isTracking: boolean;
  currentRecord: HikingRecord | null;
  records: HikingRecord[];
  
  // Actions
  startTracking: () => void;
  stopTracking: (finalAltitude: number) => void;
  updateLocation: (point: LocationPoint) => void;
  addRecord: (record: HikingRecord) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  user: MOCK_USER,
  isTracking: false,
  currentRecord: null,
  records: MOCK_HISTORY,

  startTracking: () => {
    set({
      isTracking: true,
      currentRecord: {
        id: Date.now().toString(),
        userId: get().user.id,
        startTime: Date.now(),
        endTime: 0,
        duration: 0,
        distance: 0,
        altitudeGain: 0,
        maxAltitude: 0,
        path: [],
        status: 'ongoing',
      },
    });
  },

  stopTracking: (finalAltitude: number) => {
    const { currentRecord } = get();
    if (!currentRecord) return;

    const completedRecord: HikingRecord = {
      ...currentRecord,
      endTime: Date.now(),
      status: 'completed',
    };

    set((state) => ({
      isTracking: false,
      currentRecord: null,
      records: [completedRecord, ...state.records],
    }));
  },

  updateLocation: (point: LocationPoint) => {
    const { currentRecord, isTracking } = get();
    if (!isTracking || !currentRecord) return;

    const lastPoint = currentRecord.path[currentRecord.path.length - 1];
    let distDelta = 0;
    
    // Simple distance calculation (mock) - in real app use haversine
    if (lastPoint) {
       // approximation for MVP
       const R = 6371e3;
       const φ1 = lastPoint.latitude * Math.PI/180;
       const φ2 = point.latitude * Math.PI/180;
       const Δφ = (point.latitude-lastPoint.latitude) * Math.PI/180;
       const Δλ = (point.longitude-lastPoint.longitude) * Math.PI/180;
       const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                 Math.cos(φ1) * Math.cos(φ2) *
                 Math.sin(Δλ/2) * Math.sin(Δλ/2);
       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
       distDelta = R * c;
    }

    const altitudeDelta = lastPoint && point.altitude > lastPoint.altitude 
      ? point.altitude - lastPoint.altitude 
      : 0;

    set({
      currentRecord: {
        ...currentRecord,
        path: [...currentRecord.path, point],
        distance: currentRecord.distance + distDelta,
        altitudeGain: currentRecord.altitudeGain + altitudeDelta,
        maxAltitude: Math.max(currentRecord.maxAltitude, point.altitude),
        duration: (Date.now() - currentRecord.startTime) / 1000,
      }
    });
  },

  addRecord: (record) => set((state) => ({ records: [record, ...state.records] })),
}));
