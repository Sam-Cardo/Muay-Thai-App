
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from "react-native";
import NavigationMenu from "../components/NavigationMenu";

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <NavigationMenu />

      <Text style={styles.title}>Session Schedule</Text>

      {/* Add Session Button with alert when pressed */}
      <Pressable
        style={styles.button}
        onPress={() => Alert.alert("New Session")}
      >
        <Text style={styles.buttonText}>+ Add Session</Text>
      </Pressable>

      <ScrollView>
        {/* Pad Work Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pad Work</Text>
          <Text>10:00 AM - 11:00 AM</Text>
          <Text>Coach: John</Text>

          {/* Take Attendance Button with alert when pressed */}
          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Attendance", "Pad Work selected")}
          >
            <Text style={styles.buttonText}>Take Attendance</Text>
          </Pressable>
        </View>
        
        {/* Clinch Training Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Clinch Training</Text>
          <Text>12:00 PM - 1:00 PM</Text>
          <Text>Coach: Sam</Text>

            {/* Take Attendance Button with alert when pressed */}
          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Attendance", "Clinch Training selected")}
          >
            <Text style={styles.buttonText}>Take Attendance</Text>
          </Pressable>
        </View>

        {/* Sparring Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sparring</Text>
          <Text>5:00 PM - 6:00 PM</Text>
          <Text>Coach: John</Text>

          {/* Take Attendance Button with alert when pressed */}
          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Attendance", "Sparring selected")}
          >
            <Text style={styles.buttonText}>Take Attendance</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

{/* Styles */}
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
    marginTop: 10,
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
