import { View, Text, StyleSheet } from "react-native";
import NavigationMenu from "../components/NavigationMenu";

export default function FightsScreen() {
  return (
    <View style={styles.container}>
      <NavigationMenu />
      <Text style={styles.title}>Fights</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    marginTop: 30,
  },
});
