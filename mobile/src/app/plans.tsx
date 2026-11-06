import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable, Alert, TextInput } from "react-native";
import NavigationMenu from "../components/NavigationMenu";



export default function AITrainingScreen() {
      const [fighterName, setFighterName] = useState("");
      const [experience, setExperience] = useState("Beginner");
      const [weight, setWeight] = useState("");
      const [goal, setGoal] = useState("");
      const [trainingDays, setTrainingDays] = useState("4");
      const [generatedPlan, setGeneratedPlan] = useState("");
      
  return (
    <View style={styles.container}>
      <NavigationMenu />

      {/* Title and subtitle */}
      <Text style={styles.subtitle}>Personalised for Fighters</Text>
      <Text style={styles.title}>AI Training Planner</Text>

      <ScrollView>
        {/* Build a Plan Card */}
        <View style={styles.card}>
              <Text style={styles.cardTitle}>Build a Plan</Text>
              <Text>Select a fighter to create a training plan.</Text>
              <TextInput
                  style={styles.input} 
                  placeholder="Fighter Name"
                  placeholderTextColor="#888"
                  value={fighterName}
                  onChangeText={setFighterName}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Current Weight (kg)"
                  placeholderTextColor="#888"
                  keyboardType="numeric"
                  value={weight}
                  onChangeText={setWeight}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Training Goal"
                  placeholderTextColor="#888"
                  value={goal}
                  onChangeText={setGoal}
                />

                <Text style={{ marginTop: 15, fontWeight: "bold" }}>
                    Experience Level
                  </Text>

                  <View style={styles.options}>
                    {["Beginner", "Intermediate", "Advanced"].map((level) => (
                      <Pressable
                        key={level}
                        style={[
                          styles.option,
                          experience === level && styles.selectedOption,
                        ]}
                        onPress={() => setExperience(level)}
                      >
                        <Text
                          style={{
                            color: experience === level ? "#fff" : "#111",
                          }}
                        >
                          {level}
                        </Text>
                      </Pressable>
                    ))}
                  </View>

                  <Text style={{ marginTop: 15, fontWeight: "bold" }}>
                    Training Days Per Week
                  </Text>

                  <TextInput
                    style={styles.input}
                    placeholder="Number of days (1-7)"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                    value={trainingDays}
                    onChangeText={setTrainingDays}
                  />

                {/* When select fighter is pressed it alerts the user */}
                <Pressable
                  style={styles.button}
                  onPress={() => Alert.alert("Select Fighter")}
                >
                  <Text style={styles.buttonText}>Select Fighter</Text>
                </Pressable>

                {/* When generate plan is pressed it alerts the user */}
                  <Pressable
                    style={styles.button}
                    onPress={() => {
                      if (!fighterName || !weight || !goal) {
                        Alert.alert("Missing Information", "Please fill in all fighter details.");
                        return;
                      }

                      if (Number(trainingDays) < 1 || Number(trainingDays) > 7) {
                        Alert.alert("Invalid Training Days", "Enter a number between 1 and 7.");
                        return;
                      }

                      Alert.alert(
                        "Fighter Information",
                        `${fighterName}\n${experience}\n${weight} kg\n${goal}\n${trainingDays} days per week`
                      );
                    }}
                  >
                    <Text style={styles.buttonText}>Generate Plan</Text>
                  </Pressable>

              {/* Weekly Plan Card */}
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Weekly Plan</Text>
                <Text>Monday - Pad Work</Text>
                <Text>Tuesday - Cardio</Text>
                <Text>Wednesday - Clinch Training</Text>
                <Text>Thursday - Strength</Text>
                <Text>Friday - Sparring</Text>
                  {generatedPlan !== "" && (
                    <View style={styles.card}>
                      <Text style={styles.cardTitle}>AI Generated Plan</Text>
                      <Text>{generatedPlan}</Text>
                    </View>
                  )}
              </View>
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
  input: {
    backgroundColor: "#eee",
    padding: 10,
    marginTop: 10,
    color: "#000",
  },
  options: {
    flexDirection: "row",
    marginTop: 10,
  },
  option: {
    padding: 10,
    marginRight: 10,
    backgroundColor: "#eee",
  },
  selectedOption: {
    backgroundColor: "#ff0000",
  },
});
