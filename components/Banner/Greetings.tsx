import { Text } from "react-native-ui-lib";

const hour = new Date().getHours();
const greet =
  hour < 2
    ? "night"
    : hour < 12
      ? "morning"
      : hour < 16
        ? "afternoon"
        : hour < 20
          ? "evening"
          : "night";

const Greetings = () => {
  return (
    <Text text70 $textMajor>
      Good {greet}
    </Text>
  );
};
export default Greetings;
