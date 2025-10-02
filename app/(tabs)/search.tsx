import React, { useState, useEffect } from 'react';
import { FlatList, TextInput, StyleSheet } from 'react-native';
import { View, Text, Colors, TouchableOpacity } from 'react-native-ui-lib';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { searchMovies, getPopularMovies, type SearchResult } from '@/services/searchService';
import { useDebounce } from '@/hooks/useDebounce';
import { Image } from 'expo-image';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearchQuery = useDebounce(searchQuery.trim(), 500);

  // Load initial popular movies
  useEffect(() => {
    loadPopularMovies();
  }, []);

  // Perform search when debounced query changes
  useEffect(() => {
    if (debouncedSearchQuery) {
      performSearch(debouncedSearchQuery);
    } else if (!searchQuery) {
      loadPopularMovies();
    }
  }, [debouncedSearchQuery]);

  const loadPopularMovies = async () => {
    try {
      setLoading(true);
      const response = await getPopularMovies();
      setSearchResults(response.results);
    } catch (error) {
      console.error('Error loading popular movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const performSearch = async (query: string) => {
    try {
      setLoading(true);
      const response = await searchMovies(query);
      setSearchResults(response.results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const navigateToMovie = (movieId: number) => {
    router.push(`/details/${movieId}`);
  };

  const renderMovieItem = ({ item }: { item: SearchResult }) => (
    <TouchableOpacity onPress={() => navigateToMovie(item.id)}>
      <View row marginV-8 padding-16 style={styles.movieItem}>
        <View
          width={90}
          height={120}
          marginR-12
          style={styles.posterContainer}
        >
          {item.poster_path ? (
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w342${item.poster_path}` }}
              style={styles.poster}
              contentFit='contain'
            />
          ) : (
            <View center flex style={styles.noImage}>
              <Ionicons name="image-outline" size={24} color={Colors.textSecondary} />
            </View>
          )}
        </View>

        <View flex>
          <Text text16 style={{ color: Colors.textColor, fontWeight: '600' }} marginB-4>
            {item.title}
          </Text>
          <Text text14 style={{ color: Colors.textSecondary }} marginB-4>
            {item.release_date ? new Date(item.release_date).getFullYear() : 'TBA'}
          </Text>
          <Text text12 style={{ color: Colors.textSecondary }} numberOfLines={3}>
            {item.overview}
          </Text>
          <Text text12 style={{ color: Colors.tintColor }} marginT-4>
            ★ {item.vote_average.toFixed(1)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: Colors.screenBG }]}>
      <View padding-16>
        <View style={[styles.searchContainer, { backgroundColor: Colors.cardBG }]}>
          <Ionicons name="search-outline" size={20} color={Colors.textSecondary} />
          <TextInput
            style={[styles.searchInput, { color: Colors.textColor }]}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search for movies..."
            placeholderTextColor={Colors.textSecondary}
          />
          {searchQuery ? (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color={Colors.textSecondary} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      <FlatList
        data={searchResults}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <Text center marginT-40 style={{ color: Colors.textSecondary }}>
              Searching...
            </Text>
          ) : (
            <Text center marginT-40 style={{ color: Colors.textSecondary }}>
              {searchQuery ? 'No results found' : 'Popular movies'}
            </Text>
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  movieItem: {
    backgroundColor: Colors.cardBG,
    borderRadius: 12,
  },
  posterContainer: {
    borderRadius: 8,
    backgroundColor: Colors.borderColor,
  },
  poster: {
    width: 90,
    height: 140,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.$backgroundDefault,
  },
  noImage: {
    backgroundColor: Colors.borderColor,
    borderRadius: 8,
  },
});
