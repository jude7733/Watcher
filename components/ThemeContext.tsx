import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'react-native-ui-lib';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  themeMode: ThemeMode;
  effectiveTheme: 'light' | 'dark';
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');
  const [isLoaded, setIsLoaded] = useState(false);

  // Calculate effective theme
  const effectiveTheme = themeMode === 'system'
    ? (systemColorScheme ?? 'light')
    : themeMode;

  // Load saved theme preference
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('themeMode');
        if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
          setThemeModeState(savedTheme as ThemeMode);
        }
      } catch (error) {
        console.error('Failed to load theme:', error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadTheme();
  }, []);

  // Configure react-native-ui-lib when theme changes
  useEffect(() => {
    if (!isLoaded) return;

    // Load color schemes for react-native-ui-lib
    Colors.loadSchemes({
      light: {
        screenBG: '#fff',
        textColor: '#11181C',
        textSecondary: '#687076',
        iconColor: '#687076',
        tintColor: '#0a7ea4',
        cardBG: '#f8f9fa',
        borderColor: '#e9ecef',
        errorColor: '#dc3545',
        successColor: '#28a745',
        warningColor: '#ffc107',
        backgroundGeneralMedium: '#e9ecef',
      },
      dark: {
        screenBG: '#151718',
        textColor: '#ECEDEE',
        textSecondary: '#9BA1A6',
        iconColor: '#9BA1A6',
        tintColor: '#fff',
        cardBG: '#1f2937',
        borderColor: '#374151',
        errorColor: '#ef4444',
        successColor: '#10b981',
        warningColor: '#f59e0b',
        backgroundGeneralMedium: '#374141',
      }
    });

    // Set the current scheme
    Colors.setScheme(effectiveTheme);
  }, [effectiveTheme, isLoaded]);

  const setThemeMode = async (mode: ThemeMode) => {
    try {
      setThemeModeState(mode);
      await AsyncStorage.setItem('themeMode', mode);
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  };

  if (!isLoaded) {
    return null; // or a loading spinner
  }

  return (
    <ThemeContext.Provider value={{ themeMode, effectiveTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
