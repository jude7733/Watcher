import React from "react";
import { Pressable, Animated } from "react-native";
import { View, Text, Colors } from "react-native-ui-lib";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/components/ThemeContext';

export function ThemeToggle() {
  const { themeMode, effectiveTheme, setThemeMode } = useTheme();
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const toggleTheme = () => {
    // Animation feedback
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    // Theme switching logic
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else if (themeMode === 'dark') {
      setThemeMode('system');
    } else {
      setThemeMode('light');
    }
  };

  const getThemeConfig = () => {
    switch (themeMode) {
      case 'light':
        return {
          icon: 'sunny-outline',
          label: 'Light Mode',
          description: 'Always use light theme',
          color: '#FFA726',
          bgColor: '#FFF3E0',
        };
      case 'dark':
        return {
          icon: 'moon-outline',
          label: 'Dark Mode',
          description: 'Always use dark theme',
          color: '#5C6BC0',
          bgColor: '#444444',
        };
      case 'system':
        return {
          icon: 'phone-portrait-outline',
          label: 'System Default',
          description: `Currently ${effectiveTheme}`,
          color: '#66BB6A',
          bgColor: '#E8F5E8',
        };
      default:
        return {
          icon: 'sunny-outline',
          label: 'Light Mode',
          description: 'Always use light theme',
          color: '#FFA726',
          bgColor: '#FFF3E0',
        };
    }
  };

  const themeConfig = getThemeConfig();

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <Pressable
        onPress={toggleTheme}
        accessibilityLabel={`Current theme: ${themeConfig.label}. Tap to change.`}
        accessibilityHint="Cycles between light, dark, and system theme modes"
        style={({ pressed }) => ({
          opacity: pressed ? 0.8 : 1,
        })}
      >
        <View
          row
          centerV
          spread
          padding-16
          style={{
            backgroundColor: Colors.cardBG,
            borderRadius: 16,
            marginVertical: 4,
            shadowColor: Colors.textColor,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 1,
          }}
        >
          <View row centerV flex>
            <View
              center
              width={48}
              height={48}
              style={{
                backgroundColor: themeConfig.bgColor,
                borderRadius: 24,
                marginRight: 16,
              }}
            >
              <Ionicons
                name={themeConfig.icon}
                size={24}
                color={themeConfig.color}
              />
            </View>
            <View flex>
              <Text
                text16
                style={{
                  color: Colors.textColor,
                  fontWeight: '600',
                  marginBottom: 2
                }}
              >
                {themeConfig.label}
              </Text>
              <Text
                text14
                style={{ color: Colors.textSecondary }}
              >
                {themeConfig.description}
              </Text>
            </View>
          </View>

          {/* Status indicator */}
          <View
            center
            width={32}
            height={32}
            style={{
              backgroundColor: Colors.tintColor + '20',
              borderRadius: 16,
            }}
          >
            <Ionicons
              name="chevron-forward"
              size={18}
              color={Colors.tintColor}
            />
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}
