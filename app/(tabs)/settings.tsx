import React from 'react';
import { ScrollView, Linking } from 'react-native';
import { View, Text, Card, Colors, TouchableOpacity } from 'react-native-ui-lib';
import { ThemeToggle } from '@/components/toggle-theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
  const openGitHub = () => {
    Linking.openURL('https://github.com/jude7733/watcher');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.$backgroundDefault }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        {/* Header */}
        <View marginB-24>
          <Text text24 style={{ color: Colors.textColor, fontWeight: '600' }}>
            Settings
          </Text>
          <Text text14 style={{ color: Colors.textSecondary }} marginT-4>
            Customize your Watcher experience
          </Text>
        </View>

        {/* Appearance Section */}
        <View marginB-24>
          <Text text18 style={{ color: Colors.textColor, fontWeight: '500' }} marginB-12>
            Appearance
          </Text>
          <Card padding-0 style={{ backgroundColor: Colors.cardBG }}>
            <ThemeToggle />
          </Card>
        </View>

        {/* About Section */}
        <View marginB-24>
          <Text text18 style={{ color: Colors.textColor, fontWeight: '500' }} marginB-12>
            About
          </Text>
          <Card padding-16 style={{ backgroundColor: Colors.cardBG }}>
            <Text text16 style={{ color: Colors.textColor }} marginB-8>
              Watcher
            </Text>
            <Text text14 style={{ color: Colors.textSecondary }} marginB-12>
              Version 1.0.0
            </Text>

            {/* GitHub Repository Link */}
            <TouchableOpacity onPress={openGitHub}>
              <View row centerV padding-8 br10 style={{ backgroundColor: Colors.tintColor + '20' }}>
                <Ionicons
                  name="logo-github"
                  size={20}
                  color={Colors.tintColor}
                  style={{ marginRight: 8 }}
                />
                <Text text14 style={{ color: Colors.tintColor, fontWeight: '500' }}>
                  View on GitHub
                </Text>
                <Ionicons
                  name="open-outline"
                  size={16}
                  color={Colors.tintColor}
                  style={{ marginLeft: 4 }}
                />
              </View>
            </TouchableOpacity>
          </Card>
        </View>

        {/* Developer Section */}
        <View marginB-24>
          <Text text18 style={{ color: Colors.textColor, fontWeight: '500' }} marginB-12>
            Developer
          </Text>
          <Card padding-16 style={{ backgroundColor: Colors.cardBG }}>
            <View row centerV marginB-8>
              <Text text16 style={{ color: Colors.textColor }}>
                Built by Jude
              </Text>
            </View>
            <Text text14 style={{ color: Colors.textSecondary }}>
              Movie database powered by TMDB API
            </Text>
          </Card>
        </View>

        {/* Preferences Section */}
        <View marginB-24>
          <Text text18 style={{ color: Colors.textColor, fontWeight: '500' }} marginB-12>
            Preferences
          </Text>
          <Card padding-16 style={{ backgroundColor: Colors.cardBG }}>
            <Text text14 style={{ color: Colors.textSecondary }}>
              More settings coming soon...
            </Text>
          </Card>
        </View>

        {/* Footer */}
        <View marginB-40 centerH>
          <Text text12 style={{ color: Colors.textSecondary, textAlign: 'center' }}>
            Made with ❤️ using React Native & Expo
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
