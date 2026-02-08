import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import Colors from '@/constants/Colors';
import { useAppStore } from '@/store';
import { useColorScheme } from '@/components/useColorScheme';

export default function ProfileScreen() {
  const { user, records } = useAppStore();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.backgroundAlt }]}>
      <View style={[styles.header, { backgroundColor: theme.background }]}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={[styles.nickname, { color: theme.text }]}>{user.nickname}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={[styles.statItem, { backgroundColor: theme.background }]}>
          <Text style={[styles.statValue, { color: theme.primary }]}>
            {(user.stats.totalDistance / 1000).toFixed(1)}
          </Text>
          <Text style={styles.statLabel}>Total km</Text>
        </View>
        <View style={[styles.statItem, { backgroundColor: theme.background }]}>
          <Text style={[styles.statValue, { color: theme.primary }]}>
            {user.stats.mountainsClimbed}
          </Text>
          <Text style={styles.statLabel}>Summits</Text>
        </View>
        <View style={[styles.statItem, { backgroundColor: theme.background }]}>
          <Text style={[styles.statValue, { color: theme.primary }]}>
            {user.stats.totalAltitudeGain}
          </Text>
          <Text style={styles.statLabel}>Alt Gain (m)</Text>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: theme.background }]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Recent Hikes</Text>
        {records.length === 0 ? (
          <Text style={styles.emptyText}>No records yet. Start hiking!</Text>
        ) : (
          records.map((record) => (
            <View key={record.id} style={styles.recordItem}>
              <Text style={styles.recordDate}>{new Date(record.startTime).toLocaleDateString()}</Text>
              <Text style={styles.recordDetails}>
                {(record.distance / 1000).toFixed(2)}km • {Math.floor(record.duration / 60)}min
              </Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nickname: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    color: '#666',
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  statItem: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    width: '30%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    color: '#888',
    fontSize: 12,
  },
  section: {
    marginHorizontal: 15,
    padding: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  emptyText: {
    color: '#999',
    fontStyle: 'italic',
  },
  recordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  recordDate: {
    color: '#333',
  },
  recordDetails: {
    color: '#666',
  },
});
