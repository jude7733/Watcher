import React from 'react';
import { View, TextField, Colors, TouchableOpacity } from 'react-native-ui-lib';
import { Ionicons } from '@expo/vector-icons';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  showFilters: boolean;
  onToggleFilters: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder = "Search...",
  showFilters,
  onToggleFilters,
}) => {
  return (
    <View row centerV>
      <View flex marginR-12>
        <TextField
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.textSecondary}
          style={{
            backgroundColor: Colors.cardBG,
            borderRadius: 12,
            padding: 14,
            fontSize: 16,
            color: Colors.textColor,
            borderWidth: 1,
            borderColor: Colors.borderColor,
          }}
          leadingAccessory={
            <Ionicons
              name="search-outline"
              size={20}
              color={Colors.textSecondary}
              style={{ marginRight: 8 }}
            />
          }
          trailingAccessory={
            value ? (
              <TouchableOpacity onPress={() => onChangeText('')}>
                <Ionicons
                  name="close-circle"
                  size={20}
                  color={Colors.textSecondary}
                />
              </TouchableOpacity>
            ) : null
          }
        />
      </View>

      <TouchableOpacity onPress={onToggleFilters}>
        <View
          center
          width={48}
          height={48}
          style={{
            backgroundColor: showFilters ? Colors.tintColor : Colors.cardBG,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: showFilters ? Colors.tintColor : Colors.borderColor,
          }}
        >
          <Ionicons
            name="options-outline"
            size={20}
            color={showFilters ? 'white' : Colors.textColor}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
