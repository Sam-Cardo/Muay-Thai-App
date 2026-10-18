
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from "react-native";
import NavigationMenu from "../components/NavigationMenu";

export default function FightersScreen() {
  return (
    <View style={styles.container}>
      <NavigationMenu />

      <Text style={styles.title}>Fighters Roster</Text>

      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>John Smith</Text>
          <Text>Record: 12 Wins - 3 Losses</Text>
          <Text>Weight Class: 67 KG</Text>

          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("John Smith Profile")}
          >
            <Text style={styles.buttonText}>View Profile</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Mike Brown</Text>
          <Text>Record: 8 Wins - 2 Losses</Text>
          <Text>Weight Class: 75 KG</Text>

          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Mike Brown Profile")}
          >
            <Text style={styles.buttonText}>View Profile</Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("Add Fighter")}
        >
          <Text style={styles.buttonText}>+ Add Fighter</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 60,
    backgroundColor: "#111",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#ff0000",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
