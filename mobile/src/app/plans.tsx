
import { useState } from "react";
import { View, Text, TextInput, Pressable, Alert, StyleSheet, ScrollView } from "react-native";
import NavigationMenu from "../components/NavigationMenu";

export default function AITrainingScreen() {
  
  // Use state hooks to store the user's input and the generated plan.
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [experience, setExperience] = useState("Beginner");
  const [days, setDays] = useState("4");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  async function generatePlan() {

    // checks for missing infomation 
    if (!name || !weight || !goal) {
      Alert.alert("Error", "Please fill in all details.");
      return;
    }

    // checks to make sure its in the valid range and its a number and not a decimal
    if (Number(days) < 1 || Number(days) > 7 || !Number.isInteger(Number(days))) {
      Alert.alert("Error", "Enter between 1 and 7 days.");
      return;
    }

    // makes a post request to the django backend to generate a training plan based on the entered infomation.
    try {
      setLoading(true);

      const response = await fetch("http://172.20.10.4:8000/api/training-plans/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          weight,
          goal,
          experience,
          training_days: Number(days),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        Alert.alert("Error", data.error || "Could not generate plan.");
        return;
      }

      setPlan(data.training_plan);

    } catch {
      Alert.alert("Error", "Could not connect to Django.");
    } finally {
      setLoading(false);
    }
  }

// This is the main part of the code where it puts the UI on screen and allows the user to enter their information and generate a training plan. 
return (
  <View style={styles.container}>
    <NavigationMenu />

      <ScrollView>
        <Text style={styles.title}>AI Training Planner</Text>

        <TextInput
          style={styles.input}
          placeholder="Fighter Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />

        <TextInput
          style={styles.input}
          placeholder="Training Goal"
          value={goal}
          onChangeText={setGoal}
        />

        <Text style={styles.label}>Experience Level</Text>

        <View style={styles.options}>
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <Pressable
              key={level}
              style={[styles.option, experience === level && styles.selected]}
              onPress={() => setExperience(level)}
            >
              <Text>{level}</Text>
            </Pressable>
          ))}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Training Days (1-7)"
          keyboardType="numeric"
          value={days}
          onChangeText={setDays}
        />

        <Pressable
          style={styles.button}
          onPress={generatePlan}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Generating..." : "Generate Plan"}
          </Text>
        </Pressable>

        {plan !== "" && (
          <Text style={styles.plan}>{plan}</Text>
        )}
      </ScrollView>
    </View>
  );  
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 60,
    backgroundColor: "#111",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#eee",
    padding: 10,
    marginTop: 10,
    color: "#000",
  },
  label: {
    color: "#fff",
    marginTop: 15,
  },
  options: {
    flexDirection: "row",
    marginTop: 10,
  },
  option: {
    backgroundColor: "#eee",
    padding: 10,
    marginRight: 10,
  },
  selected: {
    backgroundColor: "#ff0000",
  },
  button: {
    backgroundColor: "#ff0000",
    padding: 12,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  plan: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 24,
    marginTop: 20,
    padding: 15,
    backgroundColor: "#222",
    borderRadius: 5,
  },
});
