
import { View, Text, StyleSheet, ScrollView, Pressable, Alert } from "react-native";
import NavigationMenu from "../components/NavigationMenu";

export default function FightManagementScreen() {
  return (
    <View style={styles.container}>
      <NavigationMenu />

      <Text style={styles.subtitle}>Fights and History</Text>
      <Text style={styles.title}>Fight Management</Text>

      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Upcoming Fights</Text>
          <Text>John Smith vs. Mike Jones</Text>
          <Text>Date: 25 November</Text>
          <Text>Weight: 67 KG</Text>

          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Fight Details")}
          >
            <Text style={styles.buttonText}>View Fight</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Coach Feedback</Text>
          <Text>Keep your guard up when exiting the clinch.</Text>
          <Text>Work on checking low kicks.</Text>

          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Add Coach Feedback")}
          >
            <Text style={styles.buttonText}>Add Feedback</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Fight Video</Text>
          <Text>Review the fighter's latest fight footage.</Text>

          <Pressable
            style={styles.button}
            onPress={() => Alert.alert("Video Player")}
          >
            <Text style={styles.buttonText}>Play Video</Text>
          </Pressable>
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
