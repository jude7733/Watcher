import { useState } from "react";
import { Pressable, useColorScheme } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export function ThemeToggle() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme ?? "light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Pressable
      accessibilityLabel="Toggle color scheme"
      onPress={toggleTheme}
    >
      <AntDesign name={theme == "light" ? "sun" : "moon"} size={24} />
    </Pressable>
  );
}
