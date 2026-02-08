import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { HikingRecord, Mountain, User } from '@/types';
import MapView, { Polyline } from '@/components/MapLib';

interface PosterGeneratorProps {
  record: HikingRecord;
  mountain: Mountain;
  user: User;
}

export const PosterGenerator = ({ record, mountain, user }: PosterGeneratorProps) => {
  return (
    <View style={styles.posterContainer}>
      {/* Header with Date */}
      <View style={styles.header}>
        <Text style={styles.date}>{new Date(record.endTime).toLocaleDateString()}</Text>
        <Text style={styles.title}>MOUNTAIN MARK</Text>
      </View>

      {/* Map Track Visualization */}
      <View style={styles.mapContainer}>
        {/* In real app, use a snapshot of the map or a simplified SVG path */}
        <MapView
          style={styles.map}
          scrollEnabled={false}
          zoomEnabled={false}
          region={{
            latitude: mountain.location.latitude,
            longitude: mountain.location.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Polyline
            coordinates={record.path}
            strokeColor="#2E7D32"
            strokeWidth={4}
          />
        </MapView>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{(record.distance / 1000).toFixed(2)}</Text>
          <Text style={styles.statLabel}>KM</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{Math.floor(record.duration / 60)}</Text>
          <Text style={styles.statLabel}>MIN</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{record.maxAltitude}</Text>
          <Text style={styles.statLabel}>ALT</Text>
        </View>
      </View>

      {/* Mountain Stamp & Weather */}
      <View style={styles.stampContainer}>
        <View style={styles.weatherInfo}>
          <Text style={styles.weatherText}>🌤️ 18°C</Text>
          <Text style={styles.mountainName}>{mountain.name}</Text>
        </View>
        <View style={styles.stamp}>
          {/* Placeholder for Stamp Image */}
          <Text style={styles.stampText}>SUMMIT</Text>
          <Text style={styles.stampText}>VERIFIED</Text>
        </View>
      </View>

      {/* Footer User Info */}
      <View style={styles.footer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.nickname}>{user.nickname}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  posterContainer: {
    width: 300,
    height: 500,
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 10,
    borderColor: '#fff',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 10,
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  title: {
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
  },
  mapContainer: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  statsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  statLabel: {
    fontSize: 10,
    color: '#888',
    letterSpacing: 1,
  },
  stampContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  weatherInfo: {
    alignItems: 'flex-start',
  },
  weatherText: {
    fontSize: 16,
  },
  mountainName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  stamp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#d32f2f',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '-15deg' }],
  },
  stampText: {
    color: '#d32f2f',
    fontSize: 8,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  nickname: {
    fontSize: 12,
    fontWeight: '600',
  },
});
