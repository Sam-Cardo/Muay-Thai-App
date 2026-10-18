
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from "react-native";
import NavigationMenu from "../components/NavigationMenu";

export default function AITrainingScreen() {
  return (
    <View style={styles.container}>
      <NavigationMenu />

      <Text style={styles.subtitle}>Personalised for Fighters</Text>
      <Text style={styles.title}>AI Training Planner</Text>

      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Build a Plan</Text>
          <Text>Select a fighter to create a training plan.</Text>

          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Select Fighter")}
          >
            <Text style={styles.buttonText}>Select Fighter</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Training Plan", "Plan generation will be added later.")}
          >
            <Text style={styles.buttonText}>Generate Plan</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weekly Plan</Text>
          <Text>Monday - Pad Work</Text>
          <Text>Tuesday - Cardio</Text>
          <Text>Wednesday - Clinch Training</Text>
          <Text>Thursday - Strength</Text>
          <Text>Friday - Sparring</Text>
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
  subtitle: {
    color: "#ff0000",
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
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
