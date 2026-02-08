import React from 'react';
import { StyleSheet, View, Text, Platform, Dimensions } from 'react-native';
import MapView, { Marker } from '@/components/MapLib';
import { MOCK_MOUNTAINS } from '@/services/mockData';
import { useAppStore } from '@/store';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

export default function HomeScreen() {
  const { user, records } = useAppStore();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  const climbedMountainIds = new Set(records.map(r => r.mountainId).filter(Boolean));

  // Initial Region (China)
  const initialRegion = {
    latitude: 35.8617,
    longitude: 104.1954,
    latitudeDelta: 20,
    longitudeDelta: 20,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation
        showsBuildings // 3D buildings
        pitchEnabled // Allow tilting for 3D effect
      >
        {MOCK_MOUNTAINS.map((mountain) => (
          <Marker
            key={mountain.id}
            coordinate={mountain.location}
            title={mountain.name}
            description={`Altitude: ${mountain.altitude}m`}
            pinColor={climbedMountainIds.has(mountain.id) ? 'gold' : 'red'}
          />
        ))}
      </MapView>
      
      <View style={[styles.overlay, { backgroundColor: theme.background }]}>
         <Text style={[styles.statsText, { color: theme.text }]}>
           🌍 Footprint: {climbedMountainIds.size} / {MOCK_MOUNTAINS.length} Mountains
         </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  webFallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  webText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mountainList: {
    marginTop: 20,
    width: '100%',
    maxWidth: 400,
  },
  mountainItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  statsText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
