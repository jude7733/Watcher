import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="(home)" options={{
        title: "Home",
        tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
      }} />
      <Tabs.Screen name="settings" options={{
        headerShown: true,
        title: "Settings",
        tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
      }} />
    </Tabs>
  );
}
