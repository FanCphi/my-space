import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
import { useAppStore } from '@/store';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { LocationPoint } from '@/types';
import { MOCK_MOUNTAINS } from '@/services/mockData';

export default function RecordScreen() {
  const { isTracking, startTracking, stopTracking, updateLocation, currentRecord } = useAppStore();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const [elapsedTime, setElapsedTime] = useState(0);

  // Mock GPS Tracking
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTracking) {
      const start = Date.now() - (currentRecord?.duration || 0) * 1000;
      
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - start) / 1000));
        
        // Mock movement around Huangshan
        const baseLat = MOCK_MOUNTAINS[0].location.latitude;
        const baseLon = MOCK_MOUNTAINS[0].location.longitude;
        const randomOffset = () => (Math.random() - 0.5) * 0.001;
        
        const newPoint: LocationPoint = {
          latitude: baseLat + randomOffset() + (elapsedTime * 0.0001),
          longitude: baseLon + randomOffset(),
          altitude: 1000 + (elapsedTime * 2), // Climbing up
          timestamp: Date.now(),
        };
        updateLocation(newPoint);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking]);

  const handleToggle = () => {
    if (isTracking) {
      Alert.alert(
        "End Hiking?",
        "Are you sure you want to stop recording?",
        [
          { text: "Cancel", style: "cancel" },
          { 
            text: "End", 
            onPress: () => {
              stopTracking(currentRecord?.maxAltitude || 0);
              Alert.alert("Congratulations!", "You have completed the hike. Poster generated!");
            }
          }
        ]
      );
    } else {
      startTracking();
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={[styles.statValue, { color: theme.text }]}>
            {isTracking ? ((currentRecord?.distance || 0) / 1000).toFixed(2) : '0.00'}
          </Text>
          <Text style={styles.statLabel}>Distance (km)</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={[styles.statValue, { color: theme.text }]}>
            {isTracking ? (currentRecord?.altitudeGain || 0).toFixed(0) : '0'}
          </Text>
          <Text style={styles.statLabel}>Ascent (m)</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={[styles.statValue, { color: theme.text }]}>
             {isTracking ? (currentRecord?.maxAltitude || 0).toFixed(0) : '0'}
          </Text>
          <Text style={styles.statLabel}>Max Alt (m)</Text>
        </View>
      </View>

      <View style={styles.timerContainer}>
        <Text style={[styles.timerText, { color: theme.text }]}>
          {formatTime(isTracking ? (currentRecord?.duration || 0) : 0)}
        </Text>
        <Text style={styles.timerLabel}>Duration</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isTracking ? '#e53935' : theme.primary }]}
        onPress={handleToggle}
      >
        <Text style={styles.buttonText}>
          {isTracking ? 'End Hiking' : 'Start Hiking'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#888',
    marginTop: 5,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  timerText: {
    fontSize: 60,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
  },
  timerLabel: {
    color: '#888',
    fontSize: 16,
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
