import React from 'react';
import { StyleSheet, FlatList, Image, Text, View } from 'react-native';
import Colors from '@/constants/Colors';
import { MOCK_POSTS } from '@/services/mockData';
import { Post } from '@/types';
import { useColorScheme } from '@/components/useColorScheme';

export default function SocialScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  const renderItem = ({ item }: { item: Post }) => (
    <View style={[styles.card, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Image source={{ uri: item.userAvatar }} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={[styles.userName, { color: theme.text }]}>{item.userName}</Text>
          {item.mountainName && (
            <Text style={styles.mountainTag}>@{item.mountainName}</Text>
          )}
        </View>
        <Text style={styles.time}>{new Date(item.timestamp).toLocaleDateString()}</Text>
      </View>
      <Text style={[styles.content, { color: theme.text }]}>{item.content}</Text>
      {item.images.length > 0 && (
        <Image source={{ uri: item.images[0] }} style={styles.postImage} />
      )}
      <View style={styles.actions}>
        <Text style={styles.actionText}>❤️ {item.likes}</Text>
        <Text style={styles.actionText}>💬 {item.comments}</Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundAlt }]}>
      <FlatList
        data={MOCK_POSTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
  card: {
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  mountainTag: {
    color: Colors.light.primary,
    fontSize: 12,
  },
  time: {
    color: '#888',
    fontSize: 12,
  },
  content: {
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
  },
  actionText: {
    color: '#666',
  },
});
