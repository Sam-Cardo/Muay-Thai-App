
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from "react-native";
import NavigationMenu from "../components/NavigationMenu";

export default function FighterProfileScreen() {
  return (
    <View style={styles.container}>
      <NavigationMenu />

      <Text style={styles.title}>Fighter Profile</Text>

      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>John Smith</Text>
          <Text>Weight: 67 KG</Text>
          <Text>Height: 175 CM</Text>
          <Text>Age: 22</Text>
          <Text>Record: 12 Wins - 3 Losses</Text>

          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Edit Profile")}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Training Consistency</Text>
          <Text>Sessions Attended: 18</Text>
          <Text>Sessions Missed: 2</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Latest Coach Feedback</Text>
          <Text>Good teep timing.</Text>
          <Text>Improve defensive movement.</Text>

          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Add Feedback")}
          >
            <Text style={styles.buttonText}>Add Feedback</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Progress</Text>
          <Text>Previous Weight: 69 KG</Text>
          <Text>Current Weight: 67 KG</Text>
          <Text>Goal Weight: 65 KG</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Fights and History</Text>
          <Text>12 Wins</Text>
          <Text>3 Losses</Text>
          <Text>1 Draw</Text>
        </View>
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
