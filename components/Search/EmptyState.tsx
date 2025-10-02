import React from 'react';
import { View, Text, Colors } from 'react-native-ui-lib';
import { Ionicons } from '@expo/vector-icons';

interface EmptyStateProps {
  type: 'suggestions' | 'no-results';
  query?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ type, query }) => {
  if (type === 'suggestions') {
    return (
      <View center flex paddingT-40>
        <Ionicons name="search-outline" size={64} color={Colors.textSecondary} />
        <Text text18 style={{ color: Colors.textColor, fontWeight: '600' }} marginT-16 marginB-8>
          Discover Movies
        </Text>
        <Text text14 style={{ color: Colors.textSecondary, textAlign: 'center' }} marginH-32>
          Search for your favorite movies or browse popular and trending titles
        </Text>
      </View>
    );
  }

  return (
    <View center flex paddingT-40>
      <Ionicons name="sad-outline" size={64} color={Colors.textSecondary} />
      <Text text18 style={{ color: Colors.textColor, fontWeight: '600' }} marginT-16 marginB-8>
        No Results Found
      </Text>
      <Text text14 style={{ color: Colors.textSecondary, textAlign: 'center' }} marginH-32>
        We couldn't find any movies matching "{query}". Try a different search term or adjust your filters.
      </Text>
    </View>
  );
};
